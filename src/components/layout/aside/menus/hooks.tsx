import { getItem } from './index'
import { MailOutlined } from '@ant-design/icons'

const hooksMenu = getItem('React Hooks', 'hooks', <MailOutlined />, [
  getItem(
    'basic',
    'basic',
    null,
    [
      getItem('useState', 'useState'),
      getItem('useEffect', 'useEffect'),
      getItem('useContext', 'useContext'),
    ],
    'group'
  ),
  getItem(
    'additional',
    'additional',
    null,
    [
      getItem('useReducer', 'useReducer'),
      getItem('useCallback', 'useCallback'),
      getItem('useMemo', 'useMemo'),
      getItem('useRef', 'useRef'),
      getItem('useImperativeHandle', 'useImperativeHandle'),
      getItem('useLayoutEffect', 'useLayoutEffect'),
      getItem('useDebugValue', 'useDebugValue'),
      getItem('useDeferredValue', 'useDeferredValue'),
      getItem('useTransition', 'useTransition'),
    ],
    'group'
  ),
])

export default hooksMenu
