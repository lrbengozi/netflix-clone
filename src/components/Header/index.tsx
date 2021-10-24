import React from 'react'
import './style.scss'

interface HeaderProps {
  black: boolean
}

const Header: React.ElementType<HeaderProps> = ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="/netflix.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="/avatar.png" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}

export default Header
