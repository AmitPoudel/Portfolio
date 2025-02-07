import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Services = () => {

    const [services, setServices] = useState({});

    const navigate = useNavigate()

    const URL = "https://api.durlavparajuli.com.np/api/data/service";

    const fetchServices = async () => {
        try {
            const res = await fetch(URL)
            if (res.ok) {
                const res_data = await res.json();
                setServices(res_data)
                toast.success("Fetched")
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

    useEffect(() => {
        fetchServices()
    }, [])

    return (
        <>

            <div className='px-16 py-8 flex flex-wrap justify-center gap-10 bg-gradient-to-b from-black to-gray-800 '>

                {services.length > 0 ? services.map((item, i) => {
                    const { service, description, provider, price, _id } = item
                    console.log(_id)
                    return (
                        <>
                            <div onClick={() => {
                                navigate(`/services/${_id}`)
                            }} key={i}>

                                < ServiceCard service={service} description={description} provider={provider} price={price} />

                            </div>
                        </>
                    )

                }) : <h1 className='text-white'>Loading...</h1>}


            </div >













        </>
    )
}

export default Services