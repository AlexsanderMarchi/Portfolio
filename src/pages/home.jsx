import { useState, useEffect, useRef } from 'react'
import { Link, Element } from 'react-scroll';
import './home.css'
import Header from '../components/header'
import Projetos from '../components/projetos';
import About from  '../components/about'
import Welcome from '../components/welcome';


function Home() {


    return (
        <>
            <Header/>

            <div className='container'>
               
                <Welcome/>

                <About/>

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