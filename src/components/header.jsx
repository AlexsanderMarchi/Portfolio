import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/header.css'
import { AiFillInstagram, AiFillGithub, AiTwotoneMail } from "react-icons/ai";



function Header() {
    return (
        <header className='header-container'>
            <div className='topics-container'>
                <Link to="section1" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                    <button className='topics'>Sobre Mim </button>
                </Link>
                <Link to="section2" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                    <button className='topics'>Projetos</button>
                </Link>
                <Link to="section3" spy={true} smooth={true} duration={500} offset={-80} delay={100}>
                    <button className='topics'>Final Words</button>
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
    )
}

export default Header