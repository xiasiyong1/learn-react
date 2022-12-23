import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Main: FC = () => {
  return (
    <main>
      <div className="main-content">
        <Outlet />
      </div>
    </main>
  )
}

export default Main
