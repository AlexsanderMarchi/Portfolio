import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/projetos.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-animation.json'
import petflix from '../assets/petflix.png'
import nativeMovies from '../assets/NativeMovies.png'
import pigGame from '../assets/PigGame.png'
import snakeGame from '../assets/SnakeGame.png'



function Projetos() {

    const projetosList = [
        {
            id: 1,
            imagem: petflix,
            descricao: "descricao 1"
        },
        {
            id: 2,
            imagem: petflix,
            descricao: "descricao 2"
        },
        {
            id: 3,
            imagem: petflix,
            descricao: "descricao 3"
        },
        {
            id: 4,
            imagem: nativeMovies,
            descricao: "descricao 4"
        },
        {
            id: 5,
            imagem: pigGame,
            descricao: "descricao 5"
        },
        {
            id: 6,
            imagem: snakeGame,
            descricao: "descricao 6"
        }
    ]


    useEffect(() => {
        console.log(projetosList)
    }, [])

    return (
        <div className='projetos-container'>
            <Element name="section2">
                <p className='projetos-title'>Projetos</p>
            </Element>
            <div className='projetos-content'>
                {Object.values(projetosList).map((projeto) => (
                    <li key={projeto.id} className='projetos-lista'>
                        <img
                            className='projetos-image'
                            src={projeto.imagem}
                        />
                        <h1 className='projetos'>{projeto.descricao}</h1>
                    </li>
                ))}
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