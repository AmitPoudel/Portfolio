import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ServiceCard = ({ service, description, price, provider, id }) => {
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        console.log('Deleted Successfully', id)
        const URL = "http://localhost:5000/services1/" + id
        try {
            const res = await fetch(URL, {
                method: 'DELETE'
            })
            if (res.ok) {
                const res_data = await res.json();
                toast.success("Deleted Successfully")
                navigate(0)
            }
            else {
                const error = await res.json();
                console.log(error.extraDetails);
                toast.error(error.extraDetails)
            }
        } catch (error) {
            console.log(error)
            toast.error("unexpected server error")

        }

    }
    return (
        <div className='mt-5 py-4 w-[300px] px-4 text-gray-200 flex-col items-center justify-center border-2 border-white'>
            <div className="m-auto border-white border-2 flex justify-center items-center rounded-full h-[150px] w-[150px] ">
                <img className='w-[110px]' src="https://portfolio.durlavparajuli.com.np/vite.svg" alt="" />
            </div>
            <div className=' text-center font-extrabold'>
                {service}
            </div>
            <div className='text-center font-semibold'>
                {description}
            </div>
            <div className="div text-center border-2 ">
                <div>
                    Provider: {provider}
                </div>
                <div className='text-green-400'>
                    Starting from {price}
                </div>


            </div>
            <div className='text-white text-center bg-red-700 mx-12 mt-4 border-2 rounded-md'>
                <button onClick={() =>

                    handleDelete(id)
                }>
                    Delete
                </button>



            </div>
        </div >
    )
}

export default ServiceCard