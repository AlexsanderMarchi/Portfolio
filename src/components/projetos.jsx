import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/projetos.css'



function Projetos() {
    return (
        <div className='projetos-container'>
            <Element name="section3">
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
        </div>
    )
}

export default Projetos