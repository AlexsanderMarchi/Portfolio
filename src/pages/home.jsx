import { useState } from 'react'
import './home.css'
import Lottie from 'lottie-react';
import devAnimation from './dev-animation.json';

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header className='header-container'>
                <div className='topics-container'>
                    <p className='topics'>Sobre Mim</p>
                    <p className='topics'>Experiências</p>
                    <p className='topics'>Projetos</p>
                </div>
                <div className='contacts-container'>
                    <p className='contacts-title'>CONTATOS</p>
                    <p className='contacts'>Gmail</p>
                    <p className='contacts'>Linkedin</p>
                    <p className='contacts'>Git Hub</p>
                    <p className='contacts'>Instagram</p>
                </div>
            </header>
            <div className='container'>
                <div className='welcome-container'>
                    <Lottie animationData={devAnimation}
                        loop
                        autoplay
                        speed={5}
                        style={{ width: '300px', height: '300px' }} />
                    <p className='welcome'>Welcome</p>

                </div>
                <div className='apresentation-container'>
                    <p className='apresentation'>
                        Olá, Me chamo Alexsander,
                    </p>
                    <img
                        src='./Myself.jpg' alt='Myself'
                        className='apresentation-image'
                    />
                </div>
            </div>
        </>

    )
}

export default Home