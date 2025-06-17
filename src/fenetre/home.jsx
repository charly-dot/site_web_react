import { useState } from "react";
import { Navbar } from "./navbar";
import './../style/navbar.css';
import { motion } from "framer-motion";
import { About } from "./about";
import { Service } from "./service";
import { Room } from "./room";
import { Scroll } from "./scroll";
import { Staffs } from "./staff";

import image1 from "../assets/istockphoto-1318363878-612x612.jpg"; // OUR ROOM
import image2 from "../assets/images.jpg"; // BOOK ROOM
import image3 from "../assets/istockphoto-1168256209-1024x1024.jpg";
import image4 from "../assets/images (2).jpg";

export function Home() {
    const [isImage1, setIsImage1] = useState(true);
    const [sroll1, setSroll1] = useState(false);
    const [sroll2, setSroll2] = useState(false);

    const togglescroll1 = () => setSroll1(prev => !prev);
    const togglescroll2 = () => setSroll2(prev => !prev);
    const toggleImage = () => setIsImage1(prev => !prev);

    return (
        <div>
            <div className="-home">
                <Navbar />
            </div>

            <div className={isImage1 ? "image1" : "image2"}>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">
                            <button onClick={toggleImage} className="buttons butto">
                                <i className="bi bi-arrow-bar-left"></i>
                            </button>
                        </div>

                        <div className="col">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <h5>LUXE LIVING</h5>
                                <h2>Discover And Brand</h2>
                            </motion.div>

                            <div>
                                <motion.div
                                    initial={{ x: 300 }}
                                    animate={{ x: 0, opacity: sroll2 ? 0 : 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <button onClick={togglescroll1} className="buttons b2">
                                        OUR ROOM
                                    </button>

                                    {sroll1 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            style={{
                                                display: "flex",
                                                gap: "15px",
                                                marginTop: "10px",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img src={image1} alt="room1" style={{ width: "70%", borderRadius: "10px" }} />
                                            <img src={image3} alt="room2" style={{ width: "70%", borderRadius: "10px" }} />
                                            <img src={image4} alt="room3" style={{ width: "70%", borderRadius: "10px" }} />
                                        </motion.div>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ x: -300 }}
                                    animate={{ x: 0, y: sroll1 ? 100 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <button onClick={togglescroll2} className="buttons b1">
                                        BOOK ROOM
                                    </button>

                                    {sroll2 && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            style={{
                                                display: "flex",
                                                gap: "15px",
                                                marginTop: "10px",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img src={image2} alt="book1" style={{ width: "70%", borderRadius: "10px" }} />
                                            <img src={image3} alt="book2" style={{ width: "70%", borderRadius: "10px" }} />
                                            <img src={image4} alt="book3" style={{ width: "70%", borderRadius: "10px" }} />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </div>

                        <div className="col">
                            <button onClick={toggleImage} className="buttons butto">
                                <i className="bi bi-arrow-bar-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="abouts-home">
                <About />
                <div>
                    <Room />
                    <Service />
                    <Staffs />
                </div>
            </div>
        </div>
    );
}
