import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import './home.css'
import { AiFillInstagram, AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import Lottie from 'lottie-react';
import devAnimation from './dev-animation.json';
import scrollAnimation from '../assets/scroll-animation.json'


function Home() {


    return (
        <>
            <header className='header-container'>
                <div className='topics-container'>
                    <Link to="section1" spy={true} smooth={true} duration={500} offset={-50} delay={100}>
                        <button className='topics'>Sobre Mim </button>
                    </Link>
                    <Link to="section2" spy={true} smooth={true} duration={500} offset={-50} delay={100}>
                        <button className='topics'>Experiências</button>
                    </Link>
                    <Link to="section3" spy={true} smooth={true} duration={500} offset={-50} delay={100}>
                        <button className='topics'>Projetos</button>
                    </Link>
                </div>
                <div className='contacts-container'>
                    <p className='contacts-title'>CONTATOS</p>
                    <a href="mailto:alexsandermarchi@gmail.com" target="_blank" rel="noopener noreferrer">
                        <AiTwotoneMail className='contacts' />
                    </a>
                    <a href="https://github.com/AlexsanderMarchi" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className='contacts' />
                    </a>
                    <a href="https://instagram.com/alex_marchz" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className='contacts' />
                    </a>
                </div>
            </header>




            <div className='container'>
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



                <div className='apresentation-container'>
                    <Element name="section1">
                        <p className='apresentation-title'>Sobre Mim</p>
                    </Element>
                    <div className='apresentation-content'>
                        <p className='apresentation'>
                            Olá, Me chamo Alexsander,
                        </p>
                        <img
                            src='./Myself.jpg' alt='Myself'
                            className='apresentation-image'
                        />
                    </div>
                    <Lottie animationData={scrollAnimation}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '200px', height: '100px' }} />
                </div>


                <div className='experiencias-container'>
                    <Element name="section2">
                        <p className='experiencias-title'>Experiências</p>
                    </Element>
                    <div className='apresentation-content'>
                        <p className='apresentation'>
                            Olá, Me chamo Alexsander,
                        </p>
                        <img
                            src='./Myself.jpg' alt='Myself'
                            className='apresentation-image'
                        />
                    </div>
                    <Lottie animationData={scrollAnimation}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '200px', height: '100px' }} />
                </div>


                <div className='projetos-container'>
                    <Element name="section3">
                        <p className='projetos-title'>Projetos</p>
                    </Element>
                    <div className='apresentation-content'>
                        <p className='apresentation'>
                            Olá, Me chamo Alexsander,
                        </p>
                        <img
                            src='./Myself.jpg' alt='Myself'
                            className='apresentation-image'
                        />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home