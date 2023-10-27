import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/projetos.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-animation.json'



function Projetos() {
    return (
        <div className='projetos-container'>
            <Element name="section2">
                <p className='projetos-title'>Projetos</p>
            </Element>
            <div className='projetos-content'>
                <p className='projetos'>
                    Olá, Me chamo Alexsander,
                </p>
                <img
                    src='./Myself.jpg' alt='Myself'
                    className='projetos-image'
                />
            </div>
            <Lottie animationData={scrollAnimation}
                loop
                autoplay
                speed={5}
                style={{ width: '200px', height: '100px' }} />
        </div>
    )
}

export default Projetos