import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/finalWords.css'



function FinalWords() {
    return (
        <div className='finalWords-container'>
            <Element name="section3">
                <p className='finalWords-title'>Final Words</p>
            </Element>
            <div className='finalWords-content'>
                <p className='finalWords'>
                    Olá, Me chamo Alexsander,
                </p>
                
            </div>
        </div>
    )
}

export default FinalWords