import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/pages/Profile'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <div className='container'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <span className='navbar-brand text-light px-3 h1'>Arturo López</span>
        <span className='d-flex text-light px-3'>Perfil profesional</span>
      </nav>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Profile username='lgzarturo' />} />
          <Route path='/projects' element={<Projects username='lgzarturo' />} />
          <Route path='/projects/:name' element={<Project username='lgzarturo' />} />
        </Routes>
      </BrowserRouter>

      <List />
      <Footer />
    </div>
  )
}

export default App
