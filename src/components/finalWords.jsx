import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/finalWords.css'
import Lottie from 'lottie-react';
import starWars from '../assets/starWars.json';



function FinalWords() {
    return (
        <div id='finalWords' className='flex-items bg-dark'>
            <Element name="section3">
                <p className='title'>Final Words</p>
            </Element>
            <div id='content' className='flex-items'>
                <div className="final-content column">
                    <p>
                        Obrigado por visitar meu portfólio, se quiser entrar em contato é só cliclar nos icones acima.
                        May the force be with you.
                    </p>
                </div>
                <div id='light-saber' className="column final-content">
                    <Lottie animationData={starWars}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '300px', height: '300px' }} />
                </div>
            </div>
        </div>
    )
}

export default FinalWords