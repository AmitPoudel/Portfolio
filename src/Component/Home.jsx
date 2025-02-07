import React from 'react'

import { useNavigate } from "react-router-dom"
import About from './About';
import Contact from './Contact';
import Experiences from './Experiences';
import Login from './Login'
import Services from './Services';


const Home = () => {

    const navigate = useNavigate();
    const gotocontact = () => {
        navigate("/contact");
    }


    return (
        <>
            <div className='flex bg-gradient-to-b from-black to-gray-800 h-screen w-screen'>
                <div className='text-gray-300 w-1/2'  >
                    <h1 className='text-4xl font-extrabold mt-28 text-center'>
                        Hey, I am <br /> <span className='text-blue-700'> Amit Sharma Poudel </span>  </h1>
                    <p className='text-xl text-center px-16'> I am passionate to work as a Full Stack developer, carrying experience of more than 5 years.
                        Working as a Developer makes
                        me happy and more productive on workflow.
                    </p>
                    <div className='flex items-center justify-center'>
                        <button className='bg-green-800 rounded-md text-2xl font-semibold align px-5 py-2'>
                            Contact
                        </button>
                    </div>
                </div>

                <div className='flex justify-center w-1/2'>
                    <img src="1.png" alt="" className='h-[450px] w -[150px]' />
                </div>



            </div>
            <About />
            <Experiences />
            <Contact />
            <Services />
            <Login />

        </>
    )
}

export default Home