import { useState } from "react";
import { Navbar } from "./navbar";
import './../style/navbar.css';
import {motion} from "framer-motion"
import { About } from "./about";
import { Service } from "./service";
import { Room } from "./room";
import { Scroll } from "./scroll";
import { Staffs } from "./staff";

export function Home() {
    const [isImage1, setIsImage1] = useState(true);
    const [sroll1, setSroll1] = useState(false);
    const [sroll2, setSroll2] = useState(false);

    const togglescroll1 = () => {
        setSroll1(prev => !prev);
    };

    const togglescroll2 = () => {
        setSroll2(prev => !prev);
    };
    const toggleImage = () => {
        setIsImage1(prevState => !prevState);
    };

    return (
       
       
       <div>
         <div className="-home">
            <Navbar />
        </div>
         <div className={isImage1 ? "image1" : "image2"}>
            

            <div class="container text-center">
                <div class="row align-items-start">
                    <div class="col">
                        <button onClick={toggleImage} className="buttons butto">
                            <i className="bi bi-arrow-bar-left"></i>
                        </button>
                    </div>
                    <div class="col">
                       <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1  , ease: "easeOut" }} >

                            <h5>LUXE LIVING</h5>
                            <h2>Discover And Brand</h2>

                       </motion.div>
                        <div>
                            <motion.div 
                                initial={{ x: 300 }} 
                                animate={{ x: 0, opacity: sroll2 ? 0 : 1 }} 
                                transition={{ duration: 0.5, ease: "easeOut" }} 
                            >
                                <button onClick={togglescroll1} className="buttons b2">OUR ROOM</button>
                            </motion.div>

                            <motion.div 
                                initial={{ x: -300 }} 
                                animate={{ x: 0, y: sroll1 ? 100  : 0  }} 
                                transition={{ duration: 0.5, ease: "easeOut" }} 
                            >
                                <button onClick={togglescroll2} className="buttons b1">BOOK ROOM</button>
                            </motion.div>
                        </div>
                    </div>
                    <div class="col">
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
