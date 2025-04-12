import { Link } from "react-router-dom";
import './../style/navbar.css';
export  const Titre = "HOTELIER"
export function Navbar() {

    const props = { 
        id: 'navibara',
        className: 'navibara'
    };

    return (
        <div >
            <nav className="navbar  fixed-top navibara">
                <div className="container-fluid">
                    <h2 className="ml-6 titre">{Titre}</h2>
                    <p className="ml-6 titre incons"><i class="bi bi-facebook"></i><i class="bi bi-tiktok"></i><i class="bi bi-linkedin"></i><i class="bi bi-youtube"></i><i class="bi bi-instagram"></i><i class="bi bi-whatsapp"></i></p>
                    <button className="navbar-toggler bg-white icons" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="offcanvasNavbarLabel ml-5">Listes navbar</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end p-5">
                                <li className="nav-item m-4">
                                    <li><a href="/home">HOME</a></li>
                                </li>
                                                           
                                <li className="nav-item m-4">
                                    <li><a href="About">ABOUT US</a></li>
                                </li>
                                <li className="nav-item m-4">
                                    <li><a href="room">ROOM</a></li>
                                </li>
                                <li className="nav-item m-4">
                                    <li><a href="service">SERVICES</a></li>
                                </li>

                                <li className="nav-item m-4">
                                <li>
                                <a href="contact">CONTACTE</a></li>
                                </li>
                                <li className="nav-item dropdown m-4">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Incription</a></li>
                                        <li><a className="dropdown-item" href="#">Information</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
