import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/utilities.css'
import '../styles/experience.css';
import senai from '../assets/senaiLogo.jpg';
import estacio from '../assets/estacioLogo.png';
import Lottie from 'lottie-react';
import scrollAnimation from '../assets/scroll-white.json';
// import starWars from '../assets/starWars.json';



function Experience() {

    const experienceList = [
        {
            id: 1,
            imagem: senai,
            data: "maio de 2021 - dezembro de 2023",
            competencias: "JavaScript - HTML5, CSS3 - React - React Native - C++ - Node.js - SQL - Modelagem de Sistemas - Cypress.io",
            descricao: "Sistema de Ensalamento, com CRUD(modelo MVC e Facade) e quadro de horários. Foi utilizado React, Node.js e SQL",
            title: "Senai SA",
            github: "https://github.com/PedroHGaspar/Senai-S-A"
        },
        {
            id: 2,
            imagem: estacio,
            data: "maio de 2021 - dezembro de 2023",
            competencias: "JavaScript - HTML5, CSS3 - React - React Native - C++ - Node.js - SQL - Modelagem de Sistemas - Cypress.io",
            descricao: "Criação de um Streaming voltado para Pets, sendo desenvolvido em React e Node.js na parte de API.",
            title: "Petflix",
            github: "https://github.com/AlexsanderMarchi/petFlix"
        }
    ]

    return (
        <div id='experience' className='flex-items bg-dark'>
            <Element name="section2">
                {/* <p className='title'>Final Words</p> */}
            </Element>
            <div className='projetos-list'>
                {Object.values(experienceList).map((experience) => (
                    <li key={experience.id} className='projeto flex-items bg-dark img-left'>
                        <div className="column list-column list-info">
                            <div>
                                <img
                                    className='img-left img-experience'
                                    src={experience.imagem}
                                />
                                <p>{experience.data}</p>

                            </div>
                            <p className='projetos'> Competências: {experience.competencias}</p>
                        </div>
                        <div className='column list-column list-info'>
                            <h2 className='projetos-subtitle'>{experience.title}</h2>
                            <p className='projetos'>{experience.descricao}</p>
                            <p>GIT HUB: <br /><a href={experience.github} target='_blank'>{experience.github}</a></p>
                        </div>

                    </li>
                ))}
            </div>
            {/* <a href="#">
                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </a> */}
            <Link to="section3" spy={true} smooth={true} duration={500} offset={-25} delay={100}>

                <Lottie animationData={scrollAnimation}
                    loop
                    autoplay
                    speed={5}
                    style={{ width: '200px', height: '100px' }} />
            </Link>
        </div>
    )
}

export default Experience
// <div id='content' className='flex-items'>
//     <div className="final-content column">
//         <p>
//             Obrigado por visitar meu portfólio, se quiser entrar em contato é só cliclar nos icones acima.
//             May the force be with you.
//         </p>
//     </div>
//     <div id='light-saber' className="column final-content">
//         <Lottie animationData={starWars}
//             loop
//             autoplay
//             speed={5}
//             style={{ width: '300px', height: '300px' }} />
//     </div>
// </div>