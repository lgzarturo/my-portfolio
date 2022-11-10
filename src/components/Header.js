import './Header.css'
import { Link as RouterLink } from 'react-router-dom'
import Link from './Link'

import logo from './header-portal.png'

function Header () {
  return (
    <header className='app-header p-3'>
      <img src={logo} className='app-logo' alt="logo" />
      <h2>Mi portafolio profesional</h2>
      <nav>
        <RouterLink to='/' className='app-link'>Sobre mí</RouterLink>
        <RouterLink to='/projects' className='app-link'>Proyectos</RouterLink>
      </nav>
      <Link url='https://linkedin.com/in/lgzarturo' title='LinkedIn' />
      <Link url='https://github.com/lgzarturo' title='GitHub' />
      <Link url='https://twitter.com/lgzarturo' title='Twitter' />
    </header>
  )
}

export default Header
