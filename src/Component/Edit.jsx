import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
const ContactForm = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
    }, [])

    const [formData, setFormData] = useState({

    });

    const fetchData = async () => {
        const URL = "http://localhost:5000/users/" + id
        try {
            const res = await fetch(URL, {
                method: 'GET'
            })
            if (res.ok) {
                const res_data = await res.json();
                setFormData(
                    res_data
                )
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

    // message sent successfully matlab tyo enter gareko msg chai pugeo
    const editUser = async () => {
        const URL = "http://localhost:5000/users/" + id
        try {
            const req = await fetch(URL, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })
            if (req.ok) {
                const res_data = await req.json();
                toast.success(res_data.msg)
                navigate('/users')
            }
            else {
                const error = await req.json();
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
        editUser();
        // Add form submission logic (like API calls) here
        console.log(formData);
        // alert('Message sent!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800">
            <div className="p-8 bg-gray-800 rounded-lg shadow-2xl  w-[500px]">
                <h2 className="text-4xl font-bold text-center text-[#9D00FF]">Edit User</h2>
                <form onSubmit={handleSubmit} className="mt-4 ">
                    <div className="mb-4 ">
                        <label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg outline-none h-16 text-xl"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg outline-none h-16 text-xl"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-300">
                            Phone
                        </label>
                        <textarea
                            typer="text"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg outline-none h-16 text-xl"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className=" text-xl w-full px-4 py-2 text-white bg-[#9D00FF] rounded-lg hover:bg-purple-500 h-14"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm          
