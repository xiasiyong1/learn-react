import { createContext, type Dispatch, type SetStateAction } from 'react'

export interface IThemeContext {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

const ThemeContext = createContext<IThemeContext>({
  count: 0,
  setCount: () => {},
})

export default ThemeContext
