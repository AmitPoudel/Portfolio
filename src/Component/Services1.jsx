import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { toast } from 'react-toastify'

const Services1 = () => {

    const [services1, setServices1] = useState({});

    const URL = "http://localhost:5000/services1";

    const postMessage = async () => {
        try {
            const req = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(formData),
            })
            if (req.ok) {
                const res_data = await req.json();
                console.log(res_data);

                localStorage.setItem("token", res_data.token)

                setFormData({ service: "", description: "", price: "", provider: "" })
                toast.success(res_data.msg)
                navigate('/dashboard')
            }
            else {
                const error = await req.json();
                console.log(error);
                toast.error(error.extraDetails || error.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("unexpected server error")

        }

    }

    const fetchServices1 = async () => {
        try {
            const res = await fetch(URL)
            if (res.ok) {
                const res_data = await res.json();
                setServices1(res_data)
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postMessage();
        // Add form submission logic (like API calls) here
        console.log(formData);
        // alert('Message sent!');
    };

    const checkAuth = () => {
        const token = localStorage.getItem("token")
        if (token) {
            navigate('/dashboard')
        }
    }






    useEffect(() => {
        fetchServices1()
    }, [])

    return (
        <>

            <div className='px-16 py-8 flex flex-wrap justify-center gap-10 bg-gradient-to-b from-black to-gray-800 '>

                {services1.length > 0 ? services1.map((item, i) => {
                    const { service, description, provider, price, _id } = item
                    return (
                        <>
                            < ServiceCard key={i} service={service} description={description} provider={provider} price={price} id={_id} />
                        </>
                    )

                }) : <h1 className='text-white'>Loading...</h1>}


            </div >













        </>
    )
}

export default Services1