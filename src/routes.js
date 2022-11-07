import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Inicio from './pages/Inicio'
import Cadastro from './pages/cadastro'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/inicio" exact element={<Inicio/>} />
            <Route path="/castrarUser" exact element={<Cadastro/>} />
      </Routes>
    </Router>
  )
}