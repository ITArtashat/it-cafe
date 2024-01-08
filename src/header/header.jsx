import React, { useState, useRef } from "react";

import "./header.css";
import Section1 from "../pages/section1/Section1";
import Section4 from "../pages/scetion4/Section4";
import Footer from "../footer/Footer";
import Menu from "../pages/Menu/Menu";
import logoPng from "../img/logo.png";
import Slide from "../Carusel/carusel";
import QR from "../Menu/Menu";
import { Link } from "react-router-dom";

function Header() {
    const [isopen, setIsopen] = useState(false);

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const ref2 = useRef(null);

    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: "smooth" });
    };
    const ref3 = useRef(null);

    const handleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: "smooth" });
    };
    const ref4 = useRef(null);

    const handleClick4 = () => {
        ref4.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <nav>
                <div className="inner-nav">
                    <div className="logo">
                        <img src={logoPng} className="logo-png" />
                        <Link to={'/'}>IT_CAFÉ</Link>
                    </div>
                    <div className={`op `}>
                        <div
                            id="mySidenav"
                            className={`sidenav ${isopen ? "open" : ""}`}
                        >
                            <button
                                href="#"
                                className="closebtn"
                                onClick={() => {
                                    setIsopen(false);
                                }}
                            >
                                ×
                            </button>

                            <button><Link to={'/'}>Գլխավոր</Link> </button>
                            <button onClick={handleClick}>Մեր մասին</button>
                            <button><Link to={'/qr'}>Մենյու</Link></button>

                            <button onClick={handleClick3}>
                                Որտեղ ենք մենք
                            </button>
                            <button onClick={handleClick4}>կապ մեզ հետ</button>
                        </div>

                        <div className="_3-h">
                            <button
                                className="nav-logo"
                                onClick={() => {
                                    setIsopen(!isopen);
                                }}
                            >
                                {" "}
                                ☰
                            </button>
                        </div>
                    </div>
                    <div className="nav-links main">
                        <button> <Link to={'/'}>Գլխավոր</Link></button>
                        <button onClick={handleClick}>Մեր մասին</button>
                        <button><Link to={'/qr'}>Մենյու</Link></button>
                        <button onClick={handleClick3}>Որտեղ ենք մենք</button>
                        <button onClick={handleClick4}>Կապ մեզ հետ</button>

                        
                    </div>
                </div>

                <div class="container">
                    <img src={"./img/2.png"} className="row beans3" />
                    <img src={"./img/flake.jpg"} className="row beans flake2" />
                    <img src={"./img/2.png"} className="row beans" />
                    <img src={"./img/2.png"} className="row beans2" />
                    <img
                        src={"./img/flake.jpg"}
                        className="row beans3 flake2"
                    />
                    <img src={"./img/2.png"} className="row beans" />
                    <img
                        src={"./img/flake.jpg"}
                        className="row beans2 flake2"
                    />
                </div>
                <div className="container-big">
                    <div class=" container">
                        <img src={"./img/2.png"} className="row beans" />
                        <img
                            src={"./img/flake.jpg"}
                            className="row beans2 flake2"
                        />

                        <img src={"./img/2.png"} className="row beans2" />
                        <img src={"./img/2.png"} className="row beans3" />
                        <img
                            src={"./img/flake.jpg"}
                            className="row beans flake2"
                        />

                        <img src={"./img/2.png"} className="row beans2" />
                        <img
                            src={"./img/flake.jpg"}
                            className="row beans3 flake2"
                        />
                    </div>
                </div>
            </nav>
            <div className="header-logo-img">
               </div>
            
            <Slide />
        
            
            <Section1 usref={ref} />

            <Section4 usref3={ref3} />
            <Footer usref4={ref4} />
        </div>
    );
}
export default Header;
