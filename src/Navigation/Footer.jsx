import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear();
    console.log(date)

    return (

        <>
            <div className='text-center p-6 bg-black footer'>
                <div className='text-white'>
                    <span className='text-white'> © Copyright. All Right Reserved </span>
                    <span className='text-white font-bold hover:text-blue-500 duration-300'>Amit Poudel</span>
                    <span className='text-white font-bold ml-2'>| 2020 - {date}</span>
                </div>
            </div>

        </>
    )
}



export default Footer