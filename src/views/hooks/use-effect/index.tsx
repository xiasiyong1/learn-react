import { type FC, useState, useEffect, useCallback } from 'react'
import { Button, Badge, List, Space } from 'antd'
import useDeepCompareEffect from './hooks/use-deep-compare-effect'
import useUpdateEffect from './hooks/use-update-effect'
// import { useUpdateEffect } from 'ahooks'

const data = [
  '1. 不设置deps',
  '2. deps设置为[]',
  '3. deps中包含一个引用数据类型,只改变引用数据类型的值，不改变内存地址',
  '4. deps中包含一个引用数据类型,内存地址更改了但是值不变的情况下，如何让回调不重新执行',
  '5. 回调在第一次mount的时候不执行，只在deps中的数据改变了才执行',
  '6. useEffect中返回函数， 用于清楚副作用',
  '7. useEffect中返回非函数给出警告',
  '7. useEffect想要接收一个async function怎么办？ useAsyncEffect',
]

const UseEffect: FC = () => {
  const [count, setCount] = useState(1)
  const [arr, setArr] = useState<number[]>([])
  // 1. 不设置deps',
  useEffect(() => {
    console.log('UseEffect')
  })

  // deps设置为[]', 相当于componentDidMount，只在第一次render的时候执行
  useEffect(() => {
    console.log('UseEffect componentDidMount')
  }, [])

  // 3. deps中包含一个引用数据类型,只改变引用数据类型的值，不改变内存地址',
  useEffect(() => {
    console.log('arr changed')
  }, [arr])

  // 4. deps中包含一个引用数据类型,内存地址更改了但是值不变的情况下，如何让回调不重新执行,
  useDeepCompareEffect(() => {
    console.log('useDeepCompareEffect')
  }, [arr])
  // 5. 回调在第一次mount的时候不执行，只在deps中的数据改变了才执行,
  useUpdateEffect(() => {
    console.log('useUpdateEffect')
  }, [count])
  // 6. useEffect中返回函数， 用于清楚副作用
  useEffect(() => {
    document.querySelector('#btn')?.addEventListener('click', function () {
      console.log('绑定原生click, 没有清楚副作用')
    })
  }, [count])

  const handleBtnClick = useCallback(() => {
    console.log('绑定原生click, 清楚了副作用')
  }, [])

  useEffect(() => {
    document.querySelector('#btn1')?.addEventListener('click', handleBtnClick)
    return () => {
      document
        .querySelector('#btn1')
        ?.removeEventListener('click', handleBtnClick)
    }
  }, [count])
  // todo: ts怎么配置这个必须返回函数的
  // 7. useEffect中返回非函数给出警告，这是ts给的，有这样的代码ts直接报错，ts在哪里配置的？
  // useEffect(() => {
  //   return 1
  // }, [])

  /**
   * 虽然arr的值已经改变了，但是组件并不会更新，useEffect回调也不会触发
   * 因为FC组件内部进行的是浅比较，虽然内容改变了，但是内存地址没变
   */
  const changeArrValue = () => {
    arr.push(2)
    console.log('changeArrValue', arr)
    setArr(arr)
  }
  const changeArrAddress = () => {
    setArr(arr.concat(1))
    // 或
    // setArr([...arr, 1])
  }
  const onlyChangeArrAddress = () => {
    setArr([...arr])
  }

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <Space direction="vertical">
      <Space>
        <Badge count={count}>
          <Button onClick={handleClick}>count + 1</Button>
        </Badge>
      </Space>
      <div>
        <Space direction="vertical">
          <Space>
            <Button onClick={changeArrValue}>changeArrValue</Button>
            <Button onClick={changeArrAddress}>changeArrAddress</Button>
            <Button onClick={onlyChangeArrAddress}>onlyChangeArrAddress</Button>
            <Button id="btn">绑定原生click, 没有清楚副作用</Button>
            <Button id="btn1" type="primary">
              绑定原生click, 清楚了副作用
            </Button>
          </Space>
          <div>arr: {JSON.stringify(arr)}</div>
        </Space>
      </div>
      <List
        size="large"
        header={<div>useEffect 用法</div>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Space>
  )
}

export default UseEffect
