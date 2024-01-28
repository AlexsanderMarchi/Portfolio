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
                <Element name="section1">
                </Element>
                <div className='apresentation flex-items bg-secundary left img-left'>
                    <div className="column reverse">
                        <img
                            src={myself} alt='Myself'
                            className='img-left'
                        />
                    </div>
                    <div className="column">
                        <h2>Quem Sou Eu?</h2>
                        <p>
                            Olá, Me chamo Alexsander, 23 anos. Nerd, amante de cinema e música boa, atualmente, estou me graduando na
                            instituição Estácio em Análise e Desenvolvimento de Sistemas.
                        </p>
                        <p>
                            Ja desenvolvi em JavaScript, React, React Native, C++, Node.js e SQL, e a cada dia aprendendo mais.
                        </p>
                    </div>
                </div>
                <div className='apresentation flex-items bg-grey right img-right'>
                    <div className="column reverse">
                        <h2>O que eu busco?</h2>
                        <p>
                            Ja tendo concluído o curso Técnico em Desenvolvimento de Sistemas no Senai São José, estou cada dia lutando mais para
                            conseguir me desenvolver profissionalmente e como pessoa.
                        </p>
                        <p>
                            Eu busco constantemente desafios que me levem a aprender algo novo.
                        </p>
                    </div>
                    <div className="column">
                        <img
                            src={random} alt='Myself'
                            className='img-right'
                        />
                    </div>
                </div>
                {/* <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a> */}




                <Link to="section2" spy={true} smooth={true} duration={500} offset={-25} delay={100}>
                    <Lottie animationData={scrollAnimation}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '200px', height: '100px' }} />
                </Link>

            </div>
        
    )
}

export default About