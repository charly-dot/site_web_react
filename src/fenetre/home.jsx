import { useState } from "react";
import { Navbar } from "./navbar";
import './../style/navbar.css';
import { motion } from "framer-motion";
import { About } from "./about";
import { Service } from "./service";
import { Room } from "./room";
import { Staffs } from "./staff";

import image1 from "../assets/istockphoto-1318363878-612x612.jpg";
import image2 from "../assets/images.jpg";
import image3 from "../assets/istockphoto-1168256209-1024x1024.jpg";
import image4 from "../assets/images (2).jpg";
import image5 from "../assets/dddddd.jpg"; 
import image6 from "../assets/ddddd.jpg";  

export function Home() {
    const [backgroundImage, setBackgroundImage] = useState(image5);
    const [sroll1, setSroll1] = useState(false);
    const [sroll2, setSroll2] = useState(false);

    const togglescroll1 = () => setSroll1(prev => !prev);
    const togglescroll2 = () => setSroll2(prev => !prev);

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Navbar />
    
            <div
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "1385px",
                    position: "relative",
                    marginLeft: -70,
                    padding: 0,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>LUXE LIVING</h1>
                        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Discover and Brand</h2>
                    </motion.div>

                    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                        <button onClick={togglescroll1} className="buttons b2">OUR ROOM</button>
                        <button onClick={togglescroll2} className="buttons b1">BOOK ROOM</button>
                    </div>

                    {sroll1 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: "flex",
                                gap: "15px",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                marginTop: "20px"
                            }}
                        >
                            <img src={image1} alt="room1" style={{ width: "250px", borderRadius: "10px" }} />
                            <img src={image3} alt="room2" style={{ width: "250px", borderRadius: "10px" }} />
                            <img src={image4} alt="room3" style={{ width: "250px", borderRadius: "10px" }} />
                        </motion.div>
                    )}

                    {sroll2 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1}}
                            transition={{ duration: 2 }}
                            style={{
                                display: "flex",
                                gap: "15px",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                marginTop: "20px"
                            }}
                        >
                            <img src={image2} alt="book1" style={{ width: "250px", borderRadius: "10px" }} />
                            <img src={image3} alt="book2" style={{ width: "250px", borderRadius: "10px" }} />
                            <img src={image4} alt="book3" style={{ width: "250px", borderRadius: "10px" }} />
                        </motion.div>
                    )}
                </div>

                {/* FLECHE GAUCHE */}
                <button
                    onClick={() => setBackgroundImage(image5)}
                    className="arrow-button left"
                >
                    <i className="bi bi-chevron-left"></i>
                </button>

                {/* FLECHE DROITE */}
                <button
                    onClick={() => setBackgroundImage(image6)}
                    className="arrow-button right"
                >
                    <i className="bi bi-chevron-right"></i>
                </button>
            </div>
            {window.innerWidth < 1200 && (
                <div style={{ background: 'red', color: 'white', padding: 20 }}>
                    Écran trop petit. L'application est optimisée pour les écrans ≥ 1200px.
                </div>
                )}

            <div className="abouts-home">
                <About />
                <Room />
                <Service />
                <Staffs />
            </div>
        </div>
    );
}
