import "./../style/navbar.css";
import image1 from "../assets/istockphoto-1213695547-1024x1024.jpg";
import image2 from "../assets/images (2).jpg";
import image3 from "../assets/images (1).jpg";


const liste = [
    {
        image: <img src={image1} alt="Room" style={{width:'100%'}}/>,
        nombre: "Juni Suit",
        type: "Lorem officiis, vel inventore voluptatibus necessitatibus veniam quo dolores illo praesentium sequi velit recusandae animi quibusdam eaque?" ,
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        button1: <button>VIEW DETAIL</button>,
        button2: <button>RESERVATION</button>
    },
    {
        image: <img src={image3} alt="Room" style={{width:'100%'}}/>,
        nombre: "Executive ",
        type: "Lorem officiis, vel inventore voluptatibus necessitatibus veniam quo dolores illo praesentium sequi velit recusandae animi quibusdam eaque?" ,
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        button1: <button>VIEW DETAIL</button>,
        button2: <button>RESERVATION</button>
    },
    {
        image: <img src={image1} alt="Room" style={{width:'100%'}} />,
        nombre: "Super Delx",
        type: "Lorem officiis, vel inventore voluptatibus necessitatibus veniam quo dolores illo praesentium sequi velit recusandae animi quibusdam eaque?" ,
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        button1: <button>VIEW DETAIL</button>,
        button2: <button>RESERVATION</button>
    },
];

export function Room() {
    return (
        
     
        <div className="abouts-hom">
      
            <h5><span>____OUR ROOM____</span></h5>
            <h1>Explore Our <span className="titre">ROOMS</span> </h1>
            <div className="dd">
                <ul>
                    {liste.map((listes, index) => (
                        <li key={index}>
                            <div>
                                <p>
                                    <div className="imag3">{listes.image}</div>
                                    <div className="hh">
                                        <div className="titleS">{listes.nombre}<span className="visible">_8__</span> <span>{listes.etoils} {listes.etoils} {listes.etoils} {listes.etoils} </span></div>
                                        
                                        <div className="icons">
                                            <span> {listes.etoils} </span> BONNE |<span> {listes.bain}</span> CAPACITER<span> {listes.wiffy}</span> | MAX
                                        </div>
                                        <div className="sous_titleS">{listes.type}</div>
                                        
                                    </div>
                                    <p>
                                        <div className="but">
                                        {listes.button1}
                                        <span className="visible">_</span>
                                        {listes.button2}</div></p>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
