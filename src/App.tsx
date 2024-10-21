import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Dashboard from './pages/public/Dashboard/Dashboard'
import About from './pages/public/About/About'
import Layout from './pages/public/Layout';
import Resume from './pages/public/Resume/Resume';
import Projects from './pages/public/Projects/Projects';


function App() {

  return (  
    
      <Layout>
            <nav>hola soy un nav</nav>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
        
      </Layout>
    
    
    
  )
}

export default App
