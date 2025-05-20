import React from 'react';
import logo from '../assets/Logo.svg';
import '../styles/Header.css';
export default function Header() {
  return (
    <>
        <header className='header'>
            <div className="logo">
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    </>
  )
}
