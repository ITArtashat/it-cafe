// import Footer from "../footer/Footer";

// import Menu from "../pages/Menu/Menu";
import React, { useState, useRef } from "react";

// import { Player } from 'video-react';
// import "~video-react/styles/scss/video-react";
// import './header.css';
import Logo from "../img/logo-gif.gif";
// import { useRef } from "react";
import Footer from "../footer/Footer";
import Menu from "../pages/Menu/Menu";
import { Link } from "react-router-dom";
// import inside from '../img/inside.jpg';
import logoPng from "../img/logo.png";
import Slide from "../Carusel/carusel";

 


  
function QR() {
    const [isopen,setIsopen] = useState(false)
    const ref2 = useRef(null);

    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: "smooth" });
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
                  <div id="mySidenav" className={`sidenav ${isopen ? "open" : ""}`}>
                    <button href="#" className="closebtn"
                    onClick={()=>{
                      setIsopen(false)
                    }}
                    
                    >×</button>
                    <button><Link to={'/'}>Գլխավոր</Link></button>
                    {/* <button><Link to={'/'}>Մեր մասին</Link></button> */}
                    <button onClick={handleClick2}>Մենյու</button>
                    {/* <button><Link to={'/'}>Որտեղ ենք մենք </Link></button> */}
                    <button onClick={handleClick4}>Կապ մեզ հետ</button>

                  </div>

                  <div className="_3-h">
                     <button className="nav-logo" 
                     onClick={()=>{
                      setIsopen(!isopen)
                     }} 
                     > ☰</button>
                  </div>
              </div>
              <div className="nav-links main links-menu2">
                <button><Link to={'/'}>Գլխավոր</Link></button>
                <button onClick={handleClick2}>Մենյու</button>
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
            <div className="slider-wrap-big">
                <div className="slider-wrap">
                    <div className="welcome">
                        <h1>IT_CAFÉ Մենյու</h1>
                        <p>այստեղ կգտնեք տաք և սառը ըմպելիքների, թխվածքներ, պաղպաղակներ և շեյքեր</p>
                    </div>

                    <div className="single-slide slide-1"></div>
                    <div className="single-slide slide-2"></div>
                    <div className="single-slide slide-3"></div>
                    <div className="single-slide slide-4"></div>
                    <div className="single-slide slide-5"></div>
                    <div className="single-slide slide-6"></div>
                    <div className="single-slide slide-7"></div>
                    <div className="single-slide slide-8"></div>
  
                </div>
            </div>
            <Menu  usref2={ref2}/>
            <Footer usref4={ref4}/>
        </div>
    );
}

export default QR;
