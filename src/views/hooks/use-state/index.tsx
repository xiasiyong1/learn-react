import { type FC, useState } from 'react'
import { Card, Divider, Button, Badge, Space } from 'antd'
import { AppleOutlined } from '@ant-design/icons'

const someExpensiveComputation = (count: number) => {
  return 'a'.repeat(count).split('')
}
const UseState: FC = () => {
  console.log('render UseState')
  const [count, setCount] = useState<number>(1)
  const [count1, setCount1] = useState<number>(1)
  const [count2, setCount2] = useState<number>(1)

  const [apples, setApples] = useState<string[]>(() => {
    return someExpensiveComputation(count)
  })
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleClickWithCallback = () => {
    setApples(() => someExpensiveComputation(count))
  }
  const changeTwoStateSync = () => {
    setCount1(count1 + 1)
    setCount2(count2 + 1)
  }
  const changeTwoStateAsync = () => {
    // react18之前不会被合并，UseState组件会被更新两次
    setTimeout(() => {
      setCount1(count1 + 1)
      setCount2(count2 + 1)
    }, 100)
  }

  return (
    <div>
      <Card title="基础用法 - 接受一个值" bordered={false}>
        <Badge count={count}>
          <Button onClick={handleClick}>count + 1</Button>
        </Badge>
      </Card>
      <Divider />
      <Card title="高级用法 - 接受一个函数" bordered={false}>
        {apples.map((_, index) => {
          return <AppleOutlined key={index} />
        })}
        <div>
          <Badge count={count}>
            <Button onClick={handleClickWithCallback}>
              update apple count
            </Button>
          </Badge>
        </div>
      </Card>
      <Divider />
      <Card title="同时改变两个state" bordered={false}>
        <div>
          count1: {count1}, count2: {count2}
        </div>
        <Space wrap>
          <Button onClick={changeTwoStateSync}>同步任务中修改</Button>
          <Button onClick={changeTwoStateAsync} type="primary">
            异步任务中修改
          </Button>
        </Space>
      </Card>
    </div>
  )
}

export default UseState
