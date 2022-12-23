import { type FC, useReducer } from 'react'
import {
  countReducer,
  initialState,
  increaseAction,
  decreaseAction,
} from './count-reducer'
import { Button, Badge, Space, Card } from 'antd'

const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(countReducer, initialState)

  return (
    <div>
      <Card title="基础用法">
        <Space size="large">
          <Badge count={state.count}>
            <Button>count</Button>
          </Badge>
          <Button onClick={() => dispatch(increaseAction)} type="primary">
            count increase 1
          </Button>
          <Button onClick={() => dispatch(decreaseAction)}>
            count decrease 1
          </Button>
        </Space>
      </Card>
    </div>
  )
}

export default UseReducer
