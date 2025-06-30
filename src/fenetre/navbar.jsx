import { Link } from "react-router-dom";
import './../style/navbar.css';

export const Titre = "HOTELIER";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top" style={{ backgroundColor: 'rgb(12, 6, 41)', height: '80px' }}>
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand fw-bold" style={{ color: 'rgb(255, 145, 0)', fontSize: '35px' }} href="#">
          {Titre}
        </a>

        {/* Burger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: 'rgb(255, 145, 0)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/home">HOME</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/about">ABOUT US</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/room">ROOM</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/service">SERVICES</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-white" href="/contact">CONTACT</a>
            </li>
          </ul>

          {/* Social icons (mobile only) */}
          <div className="social-icons-mobile d-lg-none text-center mt-3 mb-2">
            <a className="nav-link d-inline-block" href="#"><i className="bi bi-facebook" style={iconStyle}></i></a>
            <a className="nav-link d-inline-block" href="#"><i className="bi bi-linkedin" style={iconStyle}></i></a>
            <a className="nav-link d-inline-block" href="#"><i className="bi bi-whatsapp" style={iconStyle}></i></a>
          </div>
        </div>

        {/* Social icons (desktop only) */}
        <div className="d-none d-lg-flex align-items-center">
          <a className="nav-link" href="#"><i className="bi bi-facebook" style={iconStyle}></i></a>
          <a className="nav-link" href="#"><i className="bi bi-linkedin" style={iconStyle}></i></a>
          <a className="nav-link" href="#"><i className="bi bi-whatsapp" style={iconStyle}></i></a>
        </div>
        
      </div>
    </nav>
  );
}

const iconStyle = {
  color: 'rgb(255, 145, 0)',
  fontSize: '22px',
  padding: '10px'
};
