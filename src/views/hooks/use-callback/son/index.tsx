import {
  useCallback,
  useRef,
  useState,
  memo,
  type FC,
  type ComponentProps,
} from 'react'
// import { useMemoizedFn } from 'ahooks'
import useMemoizedFn from '../hooks/use-memoized-fn'
import { message, Button, Alert, Space, Typography } from 'antd'

interface SonProps {
  parentCount: number
}

type OnClick = ComponentProps<typeof Button>['onClick']

const { Text, Title } = Typography

const Son: FC<SonProps> = (props) => {
  const { parentCount } = props

  const [count, setCount] = useState(0)

  const normalFn = () => {
    message.info(`Current count is ${count}`)
  }

  const callbackFn = useCallback(() => {
    message.info(`Current count is ${count}`)
  }, [count])

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`)
  })

  return (
    <>
      <Space direction="vertical">
        <div>parent count: {parentCount}</div>
        <p>son count: {count}</p>
        <Button
          type="primary"
          onClick={() => {
            setCount((c) => c + 1)
          }}
        >
          Add Count
        </Button>

        <Alert
          type="warning"
          message="You can click the button to see the number of sub-component renderings"
        />
      </Space>

      <div style={{ marginTop: 32 }}>
        <Title level={3}>Component with normal function:</Title>
        <Text>父组件state改变了，会击穿子组件的memo</Text>
        {/* use callback function, ExpensiveTree component will re-render on state change */}
        <ExpensiveTree showCount={normalFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <Title level={3}>Component with useCallback function:</Title>
        <Text>
          父组件state改变了，不会击穿子组件的memo，但是子组件的state改变，会击穿子组件的memo
        </Text>
        {/* use callback function, ExpensiveTree component will re-render on state change */}
        <ExpensiveTree showCount={callbackFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <Title level={3}>Component with useMemoizedFn function:</Title>
        <Text>父组件，子组件的state改变，都不会击穿子组件的memo</Text>
        {/* use memoized function, ExpensiveTree component will only render once */}
        <ExpensiveTree showCount={memoizedFn} />
      </div>
    </>
  )
}

interface ExpensiveTreeProps {
  showCount: OnClick
}

// some expensive component with React.memo
const ExpensiveTree: FC<ExpensiveTreeProps> = memo(({ showCount }) => {
  const renderCountRef = useRef(0)
  renderCountRef.current += 1

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <Button type="primary" onClick={showCount}>
        showParentCount
      </Button>
    </div>
  )
})
ExpensiveTree.displayName = 'ExpensiveTree'

export default memo(Son)
