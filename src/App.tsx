
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { RequireAuth } from './contexts/auth/RequireAuth'
import { Panel } from './pages/Panel'
import { CadastroPaciente } from './pages/Cadastro-paciente'
import { Teste } from './pages/Teste'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<RequireAuth><Panel/></RequireAuth>} />
        <Route path="/cadastropaciente" element={<RequireAuth><CadastroPaciente/></RequireAuth>} />
        <Route path="/teste" element={<RequireAuth><Teste/></RequireAuth>} />
      </Routes>
    </div>
  )
}

export default App
