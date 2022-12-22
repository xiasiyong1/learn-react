import logo from './logo.svg'
import './App.scss'
import type { FC } from 'react'

interface Props {
  name: string
}

const App: FC<Props> = (props) => {
  const { name } = props
  console.log(name)
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload1.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
