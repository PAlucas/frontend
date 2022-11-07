import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" exact element={<Login/>} />
      </Routes>
    </Router>
  )
}