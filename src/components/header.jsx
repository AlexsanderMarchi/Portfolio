import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/utilities.css'
import '../styles/header.css'
import { AiFillInstagram, AiFillGithub, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";



function Header() {
    return (
        <header id='header-container' className='bg-dark flex-items'>
            <div id='navbar' className='flex-items'>
                {/* <li></li>
                <li></li>
                <li></li> */}

                <Link to="section1" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                    <a href="#">Sobre Mim</a>
                </Link>
                <Link to="section2" spy={true} smooth={true} duration={500} offset={-25} delay={100}>
                    <a href="#">Experiências</a>
                </Link>
                <Link to="section3" spy={true} smooth={true} duration={500} offset={-25} delay={100}>
                    <a href="#">Projetos</a>
                </Link>
            </div>
            <div id='contacts' className='flex-items'>
                <a href="mailto:alexsandermarchi@gmail.com" target="_blank" rel="noopener noreferrer">
                    <AiTwotoneMail className='contact' />
                </a>
                <a href="https://github.com/AlexsanderMarchi" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className='contact' />
                </a>
                <a href="https://instagram.com/alex_marchz" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram className='contact' />
                </a>
                <a href="https://www.linkedin.com/in/alexsander-marchi-zunino-226332170/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className='contact' />
                </a>
            </div>
        </header>
    )
}

export default Header