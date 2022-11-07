import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import InicioAdm from './pages/InicioAdm'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/inicioAdm" exact element={<InicioAdm/>} />
      </Routes>
    </Router>
  )
}