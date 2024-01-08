

import React, { useState } from "react";
import "./carusel.css";    
import { AiFillCaretLeft } from "react-icons/ai";  
function Slide() {
    const [index, setIndex] = useState(0);

    const imagesArray = [
        "./img/insaid2.jpg",
        "./img/inside6.jpg",
        "./img/inside4.jpg",
        "./img/inside3.jpg",
    ];


    const next = () => {
    setIndex(
        (index) => (index = index + 1 < imagesArray.length ? index + 1 : 0)
        );
    };

    const prev = () => {
        setIndex(
            (index) =>
                (index = index - 1 >= 0 ? index - 1 : imagesArray.length - 1)
        );
    };
    <button className="button left" onClick={prev}>
                    <AiFillCaretLeft className="arrow" />
                    
                </button>
    return (
        <div className="C"  onClick={next}>
            <div
                className="bg_div"
                style={{ backgroundImage: `url(${imagesArray[index]})` }}
               
            >
                <div className="big-button">
                
               
            </div>
            </div>
            
            
        </div>
    );
}

export default Slide;

