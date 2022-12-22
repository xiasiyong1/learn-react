import UseState from '../views/hooks/use-state'
import UseEffect from '../views/hooks/use-effect'
import UseContext from '../views/hooks/use-context'
import UseReducer from '../views/hooks/use-reducer'
import UseCallback from '../views/hooks/use-callback'
import UseMemo from '../views/hooks/use-memo'
import UseRef from '../views/hooks/use-ref'
import UseImperativeHandle from '../views/hooks/use-imperative-handle'
import UseLayoutEffect from '../views/hooks/use-layout-effect'
import UseDebugValue from '../views/hooks/use-debug-value'
import UseDeferredValue from '../views/hooks/use-deferred-value'
import UseTransition from '../views/hooks/use-transition'

const hooksRoute = [
  {
    path: 'hooks/useState',
    element: <UseState />,
  },
  {
    path: 'hooks/useEffect',
    element: <UseEffect />,
  },
  {
    path: 'hooks/useContext',
    element: <UseContext />,
  },
  {
    path: 'hooks/useReducer',
    element: <UseReducer />,
  },
  {
    path: 'hooks/useCallback',
    element: <UseCallback />,
  },
  {
    path: 'hooks/useMemo',
    element: <UseMemo />,
  },
  {
    path: 'hooks/useRef',
    element: <UseRef />,
  },
  {
    path: 'hooks/useImperativeHandle',
    element: <UseImperativeHandle />,
  },
  {
    path: 'hooks/useLayoutEffect',
    element: <UseLayoutEffect />,
  },
  {
    path: 'hooks/useDebugValue',
    element: <UseDebugValue />,
  },
  {
    path: 'hooks/useDeferredValue',
    element: <UseDeferredValue />,
  },
  {
    path: 'hooks/useTransition',
    element: <UseTransition />,
  },
]

export default hooksRoute
