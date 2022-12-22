import type { ReactNode, Key } from 'react'
import type { MenuProps } from 'antd'
import hooksMenu from './hooks'
import { SettingOutlined } from '@ant-design/icons'

type MenuItem = Required<MenuProps>['items'][number]
export function getItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const menus: MenuProps['items'] = [
  hooksMenu,

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
  ]),
]

export default menus
