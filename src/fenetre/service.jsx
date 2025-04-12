import { div } from "framer-motion/client";
import "./../style/navbar.css"
import "./../style/fenetre.css"

const liste =  [
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'Rooms & Appartements',
        type:'Contrary to populaire belief, ipsum is not simply random'
    },
    {
        image: <i class="bi bi-facebook"></i>,
        nombre: 'Food & Restaurant',
        type:'Contrary to populaire belief, ipsum is not simply random'
    },
    {
        image: <i class="bi bi-youtube"></i>,
        nombre: 'Spa & Fitnes',
        type:'Contrary to populaire belief, ipsum is not simply random'
    },
    {
        image: <i class="bi bi-instagram"></i>,
        nombre: 'Sport & Gaming',
        type:'Contrary to populaire belief, ipsum is not simply random'
    },
    ,
    {
        image: <i class="bi bi-whatsapp"></i>,
        nombre: 'Event & Party',
        type:'Contrary to populaire belief, ipsum is not simply random'
    },
    ,
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'GYM & Yoga',
        type:'Contrary to populaire belief, ipsum is not simply random'
    }
    
]

export function Service(){

    return <div className="abouts-home" >
        
        <h5><span>____OUR SERVICE____</span></h5>
        <h1>Explore Our <span className="titre">SERVICES</span> </h1>
        <div className="dddd" >
            <ul >
                {liste.map(listes =>(
                    <li key={listes.nombre}>
                        <div>
                            <p >
                                <span><div className="image">{listes.image}</div></span> <br />
                                <div className="title">{listes.nombre}</div> <br />
                                <div className="sous_title">{listes.type}</div>
                            </p>
                        </div>
                    </li>
                                    
                                    
                ))}
            </ul>
        </div>

    </div>
    
}