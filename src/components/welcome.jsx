import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/welcome.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-animation.json'
import devAnimation from '../assets/dev-animation.json';



function Welcome() {
    return (
        <div className='welcome-container'>
            <div className='welcome-containt'>
                <Lottie animationData={devAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '300px', height: '300px' }} />
                <p className='welcome'>Bem vindo(a)</p>
            </div>
            <Lottie animationData={scrollAnimation}
                loop
                autoplay
                speed={5}
                style={{ width: '200px', height: '100px' }} />
        </div>
    )
}

export default Welcome