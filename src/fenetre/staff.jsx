import "./../style/staff.css";
import image1 from "../assets/istockphoto-1318363878-612x612.jpg";
import image2 from "../assets/images.jpg";
import image3 from "../assets/istockphoto-1168256209-1024x1024.jpg";
import image4 from "../assets/images (2).jpg";
import { useState } from "react";

const liste = [
  {
    id: 1,
    image: image2,
    nombre: "Junio Suit",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
  {
    id: 2,
    image: image3,
    nombre: "Executive",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
  {
    id: 3,
    image: image1,
    nombre: "Super Delx",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
  {
    id: 4,
    image: image4,
    nombre: "Super Delx",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
];

export function Staffs() {
  return (
    <div className="abouts-home">
      <h5 style={{ marginLeft: "1%" }}><span>____OUR TEAM____</span></h5>
      <h1 style={{ marginLeft: "13%" }}>Explore Our <span className="titre">STAFFS</span></h1>
      <div className="d">
        <ul>
          {liste.map((item) => (
            <li key={item.id}>
              <HoverCard item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="formulaires">
        <Formulair />
        <Pied />
      </div>
    </div>
  );
}

function HoverCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="hover-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transition: "all 0.4s ease", textAlign: "center" }}
    >
      {!hovered ? (
        <div className="imag">
          <img src={item.image} alt="Room" style={{ width: "100%" }} />
        </div>
      ) : (
        <div className="hh" style={{ width: "100%", paddingBottom:'115px', marginTop:'10px'}}>
          <div className="iconsss" >
            <div className="iconss">{item.etoils}</div>
            <span className="visible">___</span>
            <div className="iconss">{item.bain}</div>
            <span className="visible">___</span>
            <div className="iconss">{item.wiffy}</div>
          </div>
          <div className="titleS">{item.nombre}</div>
          <div className="sous_titleS">{item.type}</div>
        </div>
      )}
    </div>
  );
}

function Formulair() {
  return (
    <div className="form" style={{ position: "relative", zIndex: 2, backgroundColor: "white",  marginLeft: "34%"}}>
      <form>
        <div className="col-auto" style={{ textAlign: "center" }}>
          <h2>Subscribe Our <span>NEWS LETTER</span></h2>
          <p>
            <input type="text" className="form-control text-center" placeholder="Enter your Email" />
            <button type="submit" id="buton" className="buton btn btn-primary mb-3">
              SUBMIT
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

function Pied() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(15, 32, 65)",
        width: "101%",
        height: "70%",
        textAlign: "left",
        padding: "5%",
        paddingTop: "15%",
        marginLeft: "7%",
        marginTop: "-10%",
        color: "white",
        fontFamily: "arial",
        zIndex: 1,
      }}
    >
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3 col-sm-6">
            <h3 style={{ borderBottom: "2px solid #FF9100", paddingBottom: "10px", marginBottom: "15px" }}>HOTELIER</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 style={{ borderBottom: "2px solid #FF9100", paddingBottom: "8px", marginBottom: "15px" }}>CONTACT</h4>
            <p><i className="bi bi-geo-alt-fill" style={{ marginRight: "8px", color: "#FF9100" }}></i>123 Street, New York, USA</p>
            <p><i className="bi bi-telephone-fill" style={{ marginRight: "8px", color: "#FF9100" }}></i>0345 990 241</p>
            <p><i className="bi bi-envelope-fill" style={{ marginRight: "8px", color: "#FF9100" }}></i>info@gmail.com</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 style={{ borderBottom: "2px solid #FF9100", paddingBottom: "8px", marginBottom: "15px" }}>COMPANY</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Blog</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 style={{ borderBottom: "2px solid #FF9100", paddingBottom: "8px", marginBottom: "15px" }}>SERVICE</h4>
            <p>Customer Support</p>
            <p>FAQ</p>
            <p>Booking Help</p>
            <p>Privacy Policy</p>
            <p>Feedback</p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#aaa" }}>
          &copy; {new Date().getFullYear()} HOTELIER. All rights reserved.
        </div>
      </div>
    </footer>
  );
}