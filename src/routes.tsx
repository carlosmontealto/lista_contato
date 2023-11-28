import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cadastrar from './pages/Cadastrar'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cadastrar/" element={<Cadastrar />} />
  </Routes>
)

export default Rotas
