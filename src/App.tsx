import logo from './logo.svg'
import { type FC } from 'react'
import './app.scss'
import Aside from './components/layout/aside'
import Main from './components/layout/main'

interface Props {
  name?: string
}

const App: FC<Props> = () => {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-header-text">React 学习</h1>
      </header>
      <section className="app-content">
        <Aside />
        <Main />
      </section>
    </div>
  )
}

export default App
