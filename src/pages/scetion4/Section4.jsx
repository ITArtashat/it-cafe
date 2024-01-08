import React from "react";
import Img2 from "../../img/outside2.jpg"
import Img1 from "../../img/outside5.jpg"
import './Section4.css';
function Section4({usref3}){
    return(
        <div className="big-div">
            <div className="div" ref={usref3}></div>
            <h1 className="were">Որտեղ ենք մենք</h1>
            <div className="section4" >
                
                <div className="imgs">
                    <img src={Img1} alt="" />
                </div>
                <div className="between-imgs">
                    <div className="were-title">
                        <h1>Մենք` քարտեզի վրա</h1>
                    </div>
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.5894779769324!2d44.54861809221033!3d39.954007086371725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406acbca2e0b3ccf%3A0x3b491adaebb261ab!2zSVQgQ2Fmw6k!5e0!3m2!1shy!2sam!4v1699893760920!5m2!1shy!2sam" width="600" height="400" className="iframe" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     </div>
                </div>
                <div className="imgs">
                    <img src={Img2} alt="" />
                </div>
            </div>
            <div className="div"></div>

        </div>
        
    );
}

export default Section4