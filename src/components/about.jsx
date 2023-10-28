import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/about.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-white.json'
import myself from '../assets/Myself.jpg'



function About() {
    return (
        <div className='apresentation-container'>
            <div className='content-background'>
                <Element name="section1">
                    <p className='apresentation-title'>Sobre Mim</p>
                </Element>
                <div className='apresentation-content'>
                    <p className='apresentation'>
                     Olá, Me chamo Alexsander, tenho 22 anos, e atualmente estudo Técnico em Desenvolvimento de Sistemas no Senai São José.
                        
                    </p>
                    <img
                        src={myself} alt='Myself'
                        className='apresentation-image'
                    />
                </div>
                <Link to="section2" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                    <Lottie animationData={scrollAnimation}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '200px', height: '100px' }} />
                </Link>
            </div>
        </div>
    )
}

export default About