import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/Auth'
import DashboardPage from './pages/Dashboard'
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <Container padding={"unset"} shadow={"md"} bg={"gray.100"} overflow={"hidden"} maxW={"6xl"} height={"100vh"}>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/dash' element={<DashboardPage />} />
      </Routes>
    </Container>
  )
}

export default App
