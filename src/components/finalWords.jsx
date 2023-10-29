import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/finalWords.css'
import Lottie from 'lottie-react';
import starWars from '../assets/starWars.json'



function FinalWords() {
    return (
        <div className='finalWords-container'>
            <Element name="section3">
                <p className='finalWords-title'>Final Words</p>
            </Element>
            <div className='finalWords-content'>
                <p className='finalWords'>
                    Obrigado por visitar meu portfólio, se quiser entrar em contato é só cliclar nos icones acima. 
                    May the force be with you.
                </p>
                <Lottie animationData={starWars}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '300px', height: '300px' }} /> 
            </div>
        </div>
    )
}

export default FinalWords