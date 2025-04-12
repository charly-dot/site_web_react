import { Navbar } from "./navbar"
import './../style/en_tete.css'
import { Link } from "react-router-dom"

export function En_tete({ title, subtitle }){
    return <>
        <Navbar />
        <div className="Tete">
            <h1>{title}</h1>
            <p>
                <h4><span>HOME </span> <span className="visible">___</span> <Link to="/home">{subtitle}</Link></h4>
            </p>
        </div>
    </>

}