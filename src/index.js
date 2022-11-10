import ReactDOM from 'react-dom/client'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <div className='container'>
      <nav className="navbar sticky-top navbar-light bg-dark">
        <span className='navbar-brand text-light px-3 h1'>
          Arturo López
        </span>
        <span className='d-flex text-light px-3'>
          Perfil profesional
        </span>
      </nav>
      <Header />
      <List />
      <Footer />
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)
