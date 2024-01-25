import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/utilities.css'
import '../styles/about.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-white.json'
import myself from '../assets/Myself.jpg'
import random from '../assets/Me.jpg'



function About() {
    return (
        <div id='about' className='flex-items'>
            <div className='apresentation flex-items bg-secundary left img-left'>
                <div className="column reverse">
                    <img
                        src={myself} alt='Myself'
                        className='img-left'
                    />
                </div>
                <div className="column">
                    <h2>Sobred Mim</h2>
                    <p>
                        Olá, Me chamo Alexsander, tenho 22 anos, e atualmente estudo Técnico em Desenvolvimento de Sistemas no Senai São José.
                        Atualmente ja desenvolvi em JavaScript, React, React Native, C++, Node.js e SQL.
                    </p>
                    <p>
                        Cada dia lutando mais para conseguir me desenvolver profissionalmente e como pessoa. Amante de cinema e guitarrista
                        nas horas vagas.
                    </p>
                </div>
            </div>
            <div className='apresentation flex-items bg-grey right img-right'>
                <div className="column reverse">
                    <h2>Sobred Mim</h2>
                    <p>
                        Olá, Me chamo Alexsander, tenho 22 anos, e atualmente estudo Técnico em Desenvolvimento de Sistemas no Senai São José.
                        Atualmente ja desenvolvi em JavaScript, React, React Native, C++, Node.js e SQL.
                    </p>
                    <p>
                        Cada dia lutando mais para conseguir me desenvolver profissionalmente e como pessoa. Amante de cinema e guitarrista
                        nas horas vagas.
                    </p>
                </div>
                <div className="column">
                    <img
                        src={random} alt='Myself'
                        className='img-right'
                    />
                </div>
            </div>
            <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a>


            {/* <Element name="section1">
                    <p className='apresentation-title'>Sobre Mim</p>
                </Element> */}
            {/* <Link to="section2" spy={true} smooth={true} duration={500} offset={-25} delay={100}>
                    <Lottie animationData={scrollAnimation}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '200px', height: '100px' }} />
                </Link> */}

        </div>
    )
}

export default About