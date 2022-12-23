import { useState, memo, type FC } from 'react'
import Son from './son'
import { Button, Space } from 'antd'

const UseCallback: FC = () => {
  const [parentCount, setParentCount] = useState(1)
  const handleClick = () => {
    setParentCount(parentCount + 1)
  }
  return (
    <Space direction="vertical">
      <Button onClick={handleClick}>setParentCount + 1</Button>
      <Son parentCount={parentCount} />
    </Space>
  )
}

export default memo(UseCallback)
