import { useEffect } from 'react'

function useAsyncEffect(fn: Function, deps: any[]) {
  useEffect(() => {
    const e = fn()
    async function execute() {
      await e
    }
    void execute()
  }, deps)
}

export default useAsyncEffect
