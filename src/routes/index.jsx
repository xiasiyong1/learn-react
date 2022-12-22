import App from '../App'
import ErrorPage from '../error-page'
import hooksRoute from './hooks'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [...hooksRoute],
    },
  ],
  {
    basename: '/learn-react',
  }
)

export default router
