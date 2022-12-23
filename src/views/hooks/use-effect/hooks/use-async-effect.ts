import { useEffect } from 'react'

function useAsyncEffect(fn: Function, deps: any[]) {
  useEffect(() => {
    const e = fn()
    async function execute() {
      await e
    }
    void execute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useAsyncEffect
