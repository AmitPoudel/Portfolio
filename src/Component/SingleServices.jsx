import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const SingleServices = () => {

    const { id } = useParams() // get params from url
    const [services, setServices] = useState({});


    const fetchServices = async () => {
        const URL = "https://api.durlavparajuli.com.np/api/data/service/" + id;
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


    const { service, description, provider, price } = services
    return (
        <>

            <div className='bg-black'>
                < ServiceCard service={service} description={description} provider={provider} price={price} />
            </div>

        </>
    )
}

export default SingleServices