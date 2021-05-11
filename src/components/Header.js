import react from 'react'
import logo from '../assets/images/logo.svg'
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="buttons">
        <button className="buttons__sign-in">Sign in</button>
        <button className="buttons__register">Register</button>
      </div>
    </header>
  )
}

export default Header
