import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Inicio from './pages/Inicio'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/inicio" exact element={<Inicio/>} />
      </Routes>
    </Router>
  )
}