import { Navbar } from './components/Navbar'
import GlobalStyles  from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { Header } from './components/Header'
import usePersistedState from './utils/usePersistedState'
import { DefaultTheme } from 'styled-components/dist/types'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Members } from './components/Members'
import { Footer } from './components/Footer'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Projects />
      <Members />  
      <Footer />
    </ThemeProvider>
  )
}

export default App
