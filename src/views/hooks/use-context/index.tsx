import { type FC, useState } from 'react'
import Son from './son'
import ThemeContext from './theme-context'
import { Badge, Button, Space, Card } from 'antd'

const UseContext: FC = () => {
  const [count, setCount] = useState(1)
  return (
    <ThemeContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <Card title="基础用法">
        <Space direction="vertical">
          <Space>
            <Son />
            <Badge count={count}>
              <Button>count: {count}</Button>
            </Badge>
          </Space>
        </Space>
      </Card>
    </ThemeContext.Provider>
  )
}

export default UseContext
