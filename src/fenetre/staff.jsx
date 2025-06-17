import "./../style/staff.css";
import image1 from "../assets/20240401_111757.jpg";
import image2 from "../assets/IMG_20230705_112110.jpg";
import image3 from "../assets/IMG_20230709_152027.jpg";
import image4 from "../assets/Snapchat-1912045420.jpg";

const liste = [
  {
    id: 1,
    image: <img src={image2} alt="Room" />,
    nombre: "Junio Suit",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
  {
    id: 2,
    image: <img src={image3} alt="Room" />,
    nombre: "Executive",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
  {
    id: 3,
    image: <img src={image1} alt="Room" />,
    nombre: "Super Delx",
    type: "Designation",
    etoils: <i className="bi bi-emoji-kiss-fill"></i>,
    bain: <i className="bi bi-hourglass-split"></i>,
    wiffy: <i className="bi bi-wifi"></i>,
  },
  {
    id: 4,
    image: <img src={image4} alt="Room" />,
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
      <h5><span>____OUR TEAM____</span></h5>
      <h1>Explore Our <span className="titre">STAFFS</span></h1>
      <div className="d">
        <ul>
          {liste.map((item) => (
            <li key={item.id}>
              <div>
                <p>
                  <div className="imag">{item.image}</div>
                  <div className="hh">
                    <div className="iconsss">
                      <div className="iconss">{item.etoils}</div>
                      <span className="visible">___</span>
                      <div className="iconss">{item.bain}</div>
                      <span className="visible">___</span>
                      <div className="iconss">{item.wiffy}</div>
                    </div>
                    <div className="titleS">{item.nombre}</div>
                    <div className="sous_titleS">{item.type}</div>
                  </div>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* FORMULAIRE */}
      <div className="formulaires">
        <Formulair />
        <Pied />
      </div>
    </div>
  );
}

function Formulair() {
  return (
    <div className="form" style={{ position: "relative", zIndex: 2, backgroundColor: "white" }}>
      <form>
        <div className="col-auto" style={{ textAlign: "center" }}>
          <h2>Subscribe Our <span>NEWS LETTER</span></h2>
          <p>
            <input type="text" className="form-control" placeholder="Enter your Email" />
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
        width: "100%",
        height: "70%",
        textAlign: "left",
        padding: "5%",
        paddingTop: "15%",
        marginLeft: "5%",
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus ducimus adipisci
                assumenda? Non quo necessitatibus earum deleniti.
              </p>
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

