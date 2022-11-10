import './Header.css'
import Link from './Link'

import logo from './header-portal.png'

function Header () {
  return (
    <header className='app-header'>
      <img src={logo} className='app-logo' alt="logo" />
      <Link url='https://linkedin.com/in/lgzarturo' title='LinkedIn' />
      <Link url='https://github.com/lgzarturo' title='GitHub' />
      <Link url='https://twitter.com/lgzarturo' title='Twitter' />
    </header>
  )
}

export default Header
