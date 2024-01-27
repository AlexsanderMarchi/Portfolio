import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/utilities.css'
import '../styles/showcase.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-white.json'
import devAnimation from '../assets/dev-animation.json';



function Showcase() {
    return (
        <div id='showcase' className='flex-items'>
            <div id='showcase-info' className='flex-items'>
                <Lottie animationData={devAnimation}
                    loop
                    autoplay
                    speed={5}
                    className='animation' />
                <h1 className='title'>Bem vindo(a)</h1>
            </div>
            <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a>
            {/* <Link to="section1" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </Link> */}
        </div>
    )
}

export default Showcase