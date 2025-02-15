import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { LinkShortcut } from './pages/link-shortcut'

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:path" element={<LinkShortcut />} />
        </Routes>
      </Router>
    </>
  )
}
