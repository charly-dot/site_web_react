import "./../style/navbar.css";
import image1 from "../assets/oefjqdekj.jpg";
import image2 from "../assets/FFFF.jpg";
import image3 from "../assets/kdnbsk.jpg";


const liste = [
    {
        image: <img src={image2} alt="Room" />,
        nombre: "Junio Suit",
        type: "Lorem officiis, vel inventore voluptatibus necessitatibus veniam quo dolores illo praesentium sequi velit recusandae animi quibusdam eaque?" ,
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        button1: <button>VIEW DETAIL</button>,
        button2: <button>BOOK NOW</button>
    },
    {
        image: <img src={image3} alt="Room" />,
        nombre: "Executive ",
        type: "Lorem officiis, vel inventore voluptatibus necessitatibus veniam quo dolores illo praesentium sequi velit recusandae animi quibusdam eaque?" ,
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        button1: <button>VIEW DETAIL</button>,
        button2: <button>BOOK NOW</button>
    },
    {
        image: <img src={image1} alt="Room" />,
        nombre: "Super Delx",
        type: "Lorem officiis, vel inventore voluptatibus necessitatibus veniam quo dolores illo praesentium sequi velit recusandae animi quibusdam eaque?" ,
        etoils: <i className="bi bi-emoji-kiss-fill"></i>,
        bain: <i className="bi bi-hourglass-split"></i>,
        wiffy: <i className="bi bi-wifi"></i>,
        button1: <button>VIEW DETAIL</button>,
        button2: <button>BOOK NOW</button>
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
                                    <div className="imag">{listes.image}</div>
                                    <div className="hh">
                                        <div className="titleS">{listes.nombre}<span className="visible">_8__</span> <span>{listes.etoils} {listes.etoils} {listes.etoils} {listes.etoils} </span></div>
                                        
                                        <div className="icons">
                                            <span> {listes.etoils} </span> BONNE |<span> {listes.bain}</span> CAPACITER<span> {listes.wiffy}</span> | MAX
                                        </div>
                                        <div className="sous_titleS">{listes.type}</div>
                                        
                                    </div>
                                    <p><div className="but">{listes.button1}
                                        <span className="visible">_8__</span>
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
