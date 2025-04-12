import "./../style/staff.css"
import image1 from "../assets/20240401_111757.jpg";
import image2 from "../assets/IMG_20230705_112110.jpg";
import image3 from "../assets/IMG_20230709_152027.jpg";
import image4 from "../assets/Snapchat-1912045420.jpg";
import { color } from "framer-motion";

const liste = [
    {
        image: <img src={image2} alt="Room" />,
        nombre: "Junio Suit",
        type: "Designation",
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
     
    },
    {
        image: <img src={image3} alt="Room" />,
        nombre: "Executive ",
        type: "Designation",
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
       
    },
    {
        image: <img src={image1} alt="Room" />,
        nombre: "Super Delx",
        type: "Designation",
         etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        
    },
    {
        image: <img src={image4} alt="Room" />,
        nombre: "Super Delx",
        type: "Designation",
         etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        
    },
];

export function Staffs(){

    return (
        <div className="abouts-home">
            <h5><span>____OUR TEEM____</span></h5>
            <h1>Explore Our <span className="titre">STAFFS</span> </h1>
            <div className="d">
                <ul>
                    {liste.map((listes, index) => (
                        <li key={index}>
                            <div>
                                <p>
                                    <div className="imag">{listes.image}</div>
                                    <div className="hh">
                                        
                                       <div className="iconsss">
                                        <div className="iconss">
                                                {listes.etoils}
                                            </div>
                                            <span className="visible">___</span>
                                            <div className="iconss">
                                                {listes.bain}
                                            </div>
                                            <span className="visible">___</span>
                                            <div className="iconss">
                                                {listes.wiffy}
                                            </div>
                                       </div>
                                        <div className="titleS">{listes.nombre}</div>      
                                        <div className="sous_titleS">{listes.type}</div>
                                        
                                    </div>
                                    
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>  
            {/* FORMULAIRE */}
            <div className="formulaires">
                
                <Formulair/>  
                <Pied />
            </div>
        </div>
    );
}
function Formulair(){

    return <div className="form">
        
            <form class="">
               
                <div class="col-auto" style={{textAlign:"center"}}>
                    <h2>Subcribe Our <span> NEWS LETTER</span></h2>
                    <p>
                        <input type="text" class="form-control" placeholder="Enter your Email"/>                      
                        <button type="submit" className="buton" id="buton" class="btn btn-primary mb-3">SUBMIT</button>
                    </p>
                </div>              
            </form>     
        
    </div>
    
    }

function Pied(){

    return<div class="row" style={{backgroundColor:"rgb(15, 32, 65)", width:"100%", height:"70%", textAlign:"left", padding:"5%", paddingTop:"15%", marginLeft:"5%", marginTop:"-10%", color:"white", fontFamily:"arial", zIndex:"1"}}>
            <div className="col">
                <h1><span>HOTELIER</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus ducimus adipisci assumenda? Non quo necessitatibus earum deleniti.</p>
            </div>
            <div className="col">
                <span><h4>CONTACT_____</h4></span>               
                <p> <i class="bi bi-facebook"></i> 123 Stret, New Yourk, USA</p>
                <p> <i class="bi bi-facebook"></i> 0345990241</p>
                <p> <i class="bi bi-facebook"></i> info@gmail.com</p>
            </div>
            <div className="col">
                <span><h4>COMPANY_____</h4></span>   
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
            </div>
            <div className="col">
            <span><h4>SERVICE_____</h4></span>   
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
                <p> <i class="bi bi-facebook"></i> XXXXXXXX  XXXXXXX</p>
            </div>
    </div>

}

