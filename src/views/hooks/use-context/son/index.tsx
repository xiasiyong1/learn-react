import { useContext } from 'react'
import { Button } from 'antd'
import ThemeContext from '../theme-context'

function Son() {
  const themeContext = useContext(ThemeContext)

  const handleClick = () => {
    themeContext.setCount(themeContext.count + 1)
  }

  return <Button onClick={handleClick}>son change count</Button>
}

export default Son
