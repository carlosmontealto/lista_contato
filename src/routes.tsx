import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cadastrar from './pages/Register'

const PRoute = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cadastrar/" element={<Cadastrar />} />
  </Routes>
)

export default PRoute
