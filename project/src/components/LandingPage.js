import React, { useEffect, useState } from 'react';
import airplane from '../images/airplane.png';
import '../styles/landing.css'

const LandingPage = () => {
    const [show, setShow] = useState({img: false, text:false});

    useEffect(()=>{
        setTimeout(()=>{
            setShow({img: true, text:false});
        },500);

        setTimeout(()=>{
            setShow({img: true, text:true});
        },1000);
    },[]);

    return (
        <div className="landingPageMainCon">
            <div className='landingPageImgCon'>
                <img src={airplane}  className={`landingPageImg hidden ${show.img ? "vissible" : ""}`} alt="side Imgs" />
            </div>
            <p className={`landingPageText hidden ${show.text ? "vissible" : ""}`}>Welcome</p>
        </div>
    )
};

export default LandingPage;