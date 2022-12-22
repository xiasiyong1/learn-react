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
  }, deps)
}

export default useUpdateEffect
