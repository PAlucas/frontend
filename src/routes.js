import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Inicio from './pages/Inicio'
import Cadastro from './pages/cadastro'
import Modulo from './pages/modulo'

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/inicio" exact element={<Inicio/>} />
            <Route path="/castrarUser" exact element={<Cadastro/>} />
            <Route path="/ModuloAdm" exact element={<Modulo/>} />
      </Routes>
    </Router>
  )
}