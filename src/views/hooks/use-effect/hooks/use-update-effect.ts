import { useEffect, useRef } from 'react'

const useUpdateEffect = (callback: Function, deps: any[]) => {
  const isMounted = useRef(false)

  // for react-refresh, 参考ahooks
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      callback()
    } else {
      isMounted.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useUpdateEffect
