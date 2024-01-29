import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import '../styles/utilities.css'
import Header from '../components/header'
import Projetos from '../components/projetos';
import About from '../components/about'
import Experience from '../components/experience';
import Showcase from '../components/showcase';

function Home() {


    return (
        <>
            <Header />

            <div className='container'>

                <Showcase />

                <About />

                <Experience />

                <Projetos />
            </div>
        </>

    )
}

export default Home




/* <div className='experiencias-container'>
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
                </div> */