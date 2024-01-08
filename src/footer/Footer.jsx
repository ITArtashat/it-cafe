
import Logo from '../img/logo.png';
import './Footer.css'
import instagram from "../img/insta-logo.png"
import phone from "../img/phone.png"
import facebook from "../img/facebook-logo.png"
import email from "../img/email.png"
import { Link } from 'react-router-dom';
// import facebook from "../img/facebook-green-icon.jpg"
function Footer({usref4}) {
    return(
        <div className="footer" ref={usref4}>
            <div className="footer-table-1">
                <h5>Բաց է՝ 10։00-22։00</h5>
                <h5>Հասցե՝ ք․Արտաշատ Օգոստոսի 23 փ․ 115/3</h5>
                <h5>Հետևեք մեզ՝</h5>
                <div className="facebook-instagram-green-icons">
                   <div className="instagram-green-icon">
                        <Link to={'https://www.instagram.com/_it_cafe/'}><img src={instagram} /></Link>
                   </div>
                   <div className="facebook-green-icon">
                        <Link to={'https://www.facebook.com/artashatcafe'}><img src={facebook}/></Link>
                   </div> 
                </div>
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="" srcset=""/>
            </div>
            {/* <div className="footer-table-3">
                <div className='number'>
                    <div className='phone-icon'>
                        <img src={phone} alt="" />
                    </div>
                    <div className='phoneNumber'>
                        <h3>+374 94 10 76 94</h3>
                        <h3>+374 94 10 76 99</h3>
                    </div>
                </div>
                
                <h3>Էլ․ հասցե՝ itcafeartashat@gmail.com</h3>
            </div> */}
            <div className='tbale-3'>
                <div className='phone-num'>
                    {/* <div className='phone-icon'> */}
                        <img src={phone} alt="" />
                    {/* </div> */}
                    <div className='phone-number'>
                        <h5> +374 94 10 76 94</h5>
                        <h5> +374 94 10 76 99</h5>
                    </div>
                </div>
                <div className='email-big'>
                    <img src={email} alt="" />

                    {/* <div className='email'>
                    </div> */}
                    <div>
                        <h5>itcafeartashat@gmail.com</h5>
                    </div>
                </div>
            </div>
            
            <div className="copy">
                <p>կայքը պատրաստվել է &copy; <Link to={'https://itartashat.am'}>ITartashat</Link>-ի կողմից</p>
            </div>
            
            
        </div>
    )
}

export default Footer