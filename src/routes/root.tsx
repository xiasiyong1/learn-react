import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

const Root: FC = () => {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default Root
