import { useEffect, useRef } from 'react'

import { isEqual } from 'lodash-es'

const useDeepCompareEffect = (callback: Function, deps: any[]) => {
  const preValue = useRef(deps)
  useEffect(() => {
    if (!isEqual(preValue.current, deps)) {
      callback()
      preValue.current = deps
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useDeepCompareEffect
