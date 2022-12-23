import type { FC } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import menus from './menus'

const Aside: FC = () => {
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    const path = e.keyPath.reverse().join('/')
    navigate(path)
  }
  return (
    <aside>
      <Menu
        onClick={onClick}
        style={{ width: 256, height: '100%', overflow: 'auto' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['hooks']}
        mode="inline"
        items={menus}
      />
    </aside>
  )
}

export default Aside
