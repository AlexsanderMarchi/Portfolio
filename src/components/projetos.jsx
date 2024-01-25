import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/utilities.css'
import '../styles/projetos.css'
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-animation.json'
import leftRight from '../assets/leftRight.json'
import petflix from '../assets/petflix.png'
import nativeMovies from '../assets/NativeMovies.png'
import pigGame from '../assets/PigGame.png'
import snakeGame from '../assets/SnakeGame.png'
import senaiSA from '../assets/senaiSA.png'
import postman from '../assets/postman.png'



function Projetos() {

    const projetosList = [
        {
            id: 1,
            imagem: senaiSA,
            descricao: "Sistema de Ensalamento, com CRUD(modelo MVC e Facade) e quadro de horários. Foi utilizado React, Node.js e SQL",
            title: "Senai SA",
        },
        {
            id: 2,
            imagem: petflix,
            descricao: "Criação de um Streaming voltado para Pets, sendo desenvolvido em React e Node.js na parte de API.",
            title: "Petflix",
        },
        {
            id: 2,
            imagem: postman,
            descricao: "Criação de APIs, utilizando Node.js e ElephantSQL para manipulação de dados e Postman para endpoints.",
            title: "APIs"
        },
        {
            id: 4,
            imagem: nativeMovies,
            descricao: "Criação de aplicativos em React Native, com desenvolvimento de perfil e rede social",
            title: "Expo"
        },
        {
            id: 5,
            imagem: pigGame,
            descricao: "Utilização de canvas no JS para desenvolvimento de uma cópia do bomberman.",
            title: "Bomber Pig"
        },
        {
            id: 6,
            imagem: snakeGame,
            descricao: "Utilização de JavaScript para desenvolvimento do famoso jogo da cobrinha.",
            title: "Snake Game"
        }
    ]


    // Funções para rolar a lista de projetos para a esquerda e direita
    // const scrollLeft = () => {
    //     const projetosContainer = document.querySelector('.projetos-content');
    //     projetosContainer.scrollLeft -= 200; // Você pode ajustar o valor de acordo com a quantidade que deseja rolar
    // };

    // const scrollRight = () => {
    //     const projetosContainer = document.querySelector('.projetos-content');
    //     projetosContainer.scrollLeft += 200; // Você pode ajustar o valor de acordo com a quantidade que deseja rolar
    // };


    return (
        <div id='projetos' className='flex-items bg-grey'>
            <h2 className='title'>Projetos</h2>
            <div className='projetos-list'>
                {Object.values(projetosList).map((projeto) => (
                    <li key={projeto.id} className='projeto flex-items bg-dark img-left'>
                        <div className="column list-column">
                            <img
                                className='img-left'
                                src={projeto.imagem}
                            />
                        </div>
                        <div className='column list-column'>
                            <h2 className='projetos-subtitle'>{projeto.title}</h2>
                            <p className='projetos'>{projeto.descricao}</p>
                            <p>GIT HUB: <a href="https://www.google.com" target='_blank'>link</a></p>
                        </div>

                    </li>
                ))}
            </div>
            <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a>

        </div>
    )
}

export default Projetos


//  <Link to="section3" spy={true} smooth={true} duration={500} offset={-25} delay={100}>

//     <Lottie animationData={scrollAnimation}
//         loop
//         autoplay
//         speed={5}
//         style={{ width: '200px', height: '100px' }} />
// </Link>


// < div className = "scroll-buttons" >
//             <Lottie animationData={leftRight}
//                 loop
//                 autoplay
//                 speed={5}
//                 onClick={scrollLeft}
//                 style={{ width: '150px', height: '200px' }} />
//             <Lottie animationData={leftRight}
//                 loop
//                 autoplay
//                 speed={5}
//                 onClick={scrollRight}
//                 style={{ width: '150px', height: '200px', transform: 'scaleX(-1)' }} />
//         </div >