import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/public/Dashboard/Dashboard'
import About from './pages/public/About/About'
import Layout from './pages/public/Layout'

function App() {

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/about' element={<About/>} />
        
        </Routes>
      </BrowserRouter>
    </Layout>
    
  )
}

export default App
