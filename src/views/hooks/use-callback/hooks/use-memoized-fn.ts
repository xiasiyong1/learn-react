import { useRef, useCallback, useLayoutEffect } from 'react'

function useMemoizedFn(handler) {
  const memoizedFn = useRef(handler)

  useLayoutEffect(() => {
    memoizedFn.current = handler
  })

  return useCallback((...args) => {
    memoizedFn.current(...args)
  }, [])
}

export default useMemoizedFn
