import React, { useState } from "react";
// import gif from "../../img/Red-animated-arrow-down.gif";
import './Section1.css';

function Section1({ usref }) {
  const [isopen,setIsopen] = useState(false)
  const [isopen2,setIsopen2] = useState(false)
  const [isopen3,setIsopen3] = useState(false)
  const [isopen4,setIsopen4] = useState(false)

    return(
        <div className="sec1" ref={usref} id="about-us" >
                    
                    <h2 className="no-margin"onClick={()=>{
                        setIsopen4(!isopen4)

                       }} >Մեր մասին</h2>
                       {/* <img src={gif} className="gif-2" /> */}
                <div className={`about-us ${isopen4?"open4":""}`} >
                    <div>
                    <div className="about-us-title">
                        <h3 className="click3"onClick={()=>{
                        setIsopen3(!isopen3)
                       }} >Ովքեր ենք մենք</h3>
                    </div>
                    <div className="about-us-text">
                        <p className={`about-us-text2 ${isopen3?"open3":""}`}>
                            IT Café-ն սրճարան է Արտաշատում, որտեղ կարող եք համտեսել տեղում պատրաստվող տարատեսակ համեղ սուրճեր, թեյեր և քաղցրավենիք։
                        </p>
                    </div>
                    </div>
                    
                    <div>
                        <h3 className="click1"onClick={()=>{
                        setIsopen(!isopen)
                       }} > Մեր առավելությունները   </h3>
                        <p  className={`click1-p ${isopen?"open":""}`}>
                            IT Cafe-ն քաղաքում աչքի է ընկնում իր բարեհամբույր աշխատակազմով, ժամակակից տեխնոլոգիաներով հագեցվածությամբ, մշտապես թարմ, որակյալ և զանազան քաղցրավենիքով, ուստի առողջ ապրելակերպ վարող հաճախորդները նույնպես կարող են գտնել սուրճի հետ քաղցրի առողջ տարբերակներ։ Այստեղ կարող եք օգտվել անլար ինտերնետի (Wi-Fi) անսպառ հնարավորություններից, առանց որևէ բարդության լիցքավորել ձեր սարքերը՝ հենց սեղաններին ամրացված լիցքավորիչներով, ինչպես նաև օգտվել մեր մենյուից՝ QR տարբերակով (թղթային տարբերակը նույնպես, իհարկե, հասանելի է)։ IT Cafe-ն նման հնարավորություններով առաջին սրճարանն է Արտաշատ քաղաքում։ 
                        </p>
                    </div>
                    <div>
                        <h3 className="click2"onClick={()=>{
                        setIsopen2(!isopen2)
                       }} >Մեր առաքելությունը </h3>
                        <p className={`click2-p ${isopen2?"open2":""}`}>
                            Նպատակ ունենալով շարունակաբար զարգացնել Արտաշատ համայնքը՝ ԱյԹի Արտաշատ ծրագրավորման կենտրոնի նախաձեռնությամբ ստեղծվել է ԱյԹի սրճարան՝ հենց կենտրոնին կից։ Եթե ցանկանում եք ունենալ լավ ժամանց ընկերների, ընտանիքի հետ, անցկացնել ծննդյան միջոցառում, գործնական հանդիպում Արտաշատում, կամ պարզապես աշխատել հաճելի միջավայրում՝ մեկ բաժակ համեղ սուրճով և քաղցրավենիքով, ապա մեր սրճարանը ճիշտ ընտրություն է։ 
                            Մեր նպատակն է պահովել մեր հաճախորդների համար հաճելի և դրական մթնոլորտ` զուգակցելով ժամանակակից լուծումներն ու համեղ ուտեստները։ Դե ինչ, անուշահամ սուրճի թարմացնող և հաճելի բույրի ներքո կսպասենք բոլորիդ։
                        </p>
                    </div>

                </div>

                
                
        </div>
    )
}
export default Section1