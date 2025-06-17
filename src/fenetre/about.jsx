import { div, li } from "framer-motion/client";
import './../style/navbar.css';
import './../style/formulaire.css';
import { Titre } from "./navbar";
import image1 from "../assets/istockphoto-1318363878-612x612.jpg";
import image2 from "../assets/images.jpg";
import image3 from "../assets/istockphoto-1168256209-1024x1024.jpg";
import image4 from "../assets/images (2).jpg";



const listess =  [
    {
        image: <i class="bi bi-facebook"></i>,
        nombre: '7861',
        type:'Rooms'
    },
    {
        image: <i class="bi bi-linkedin"></i>,
        nombre: '1224',
        type:'Staffs'
    },
    {
        image:<i class="bi bi-youtube"></i>,
        nombre: '7809',
        type:'Clients'
    }
]


export function Formulaire(){

    return <div className="formulaire">
        <p>
            <form class="row g-3">
                
                <div class="col-auto">
                    <input type="text" name="" id="" class="form-control" placeholder="Check in"/>     
                </div>
                <div class="col-auto">
                    <input type="text" name="" id="" class="form-control" placeholder="Check out"/>     
                </div>
                <div class="col-auto">
                    <input type="text" name="" id="" class="form-control" placeholder="Aduilts"/>     
                </div>
                
                <div class="col-auto">
                    <input type="text" name="" id="" class="form-control" placeholder="Childs"/>     
                </div>
                <div class="col-auto">
                    <button type="submit" className="buton" id="buton" class="btn btn-primary mb-3">Confirm identity</button>
                </div>
            </form>     
        </p>
    </div>
    
    }
    export function About(){
    
        return <div class="container" className="abouts_Liste">

             <div className="hhhh">
                <Formulaire />
             </div>
             <div className="row">
                <div class="col">
                    <div className="ddd ">
                        <h5><span>ABOUTS US ____</span></h5>
                        <h1>Welcome to <span className="titre">{Titre}</span> </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quo iusto excepturi id natus? Praesentium totam, provident nam id deserunt autem aliquam reprehenderit aspernatur harum fuga ipsam illum saepe laboriosam!</p>
                        <ul >
                            {listess.map(listes =>(
                                <li key={listes.nombre}>
                                    <div>
                                        <p >
                                            <span>{listes.image}</span> <br />
                                            {listes.nombre} <br />
                                            {listes.type}
                                        </p>
                                    </div>
                                </li>
                                
                                
                            ))}
                            <button id="buton">EXPLORE MORE</button>
                        </ul>
                    </div>
                    

                </div>
                <div class="col" style={{margin: "5% 0%"}}>
                    <p>
                        <img src={image3} alt="xfgsd" style={{ width: "40%", height: "20%", marginLeft: "20px", marginTop: "20px" }} />
                        <img src={image2} alt="xfgsd" style={{ width: "35%",  marginLeft: "5px", marginTop: "-30px" }} /> <br />
                        <img src={image4} alt="xfgsd" style={{ width: "48%", height: "200px", marginLeft: "20px", marginTop: "10px" }} />
                        <img src={image1} alt="xfgsd"  style={{ width: "27%", height: "20%", marginLeft: "5px", marginTop: "-70px" }} />
                       
                    </p>
                </div>
                
             </div>
        </div>
        
        }