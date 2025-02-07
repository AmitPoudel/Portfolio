import React, { useState } from 'react';
import { toast } from "react-toastify";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // message sent successfully matlab tyo enter gareko msg chai pugeo
    const URL = "https://api.durlavparajuli.com.np/api/form/contact"
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
                setFormData({ name: "", email: "", message: "" })

                toast.success(res_data.msg)
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
        postMessage();
        // Add form submission logic (like API calls) here
        console.log(formData);
        // alert('Message sent!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-800">
            <div className="p-8 bg-gray-800 rounded-lg shadow-2xl  w-[500px]">
                <h2 className="text-4xl font-bold text-center text-[#9D00FF]">Contact Me</h2>
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
                        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-300">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
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
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

// export default ContactForm;
// import React from 'react'
// import { useState } from 'react'

// const Contact = () => {
//   const [data, setdata] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const handlechange = (e) => {
//     const { name, value } = e.target
//     setdata({ ...data, [name]: value })
//   }
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     console.log(data);
//     setdata({ name: "", email: "", message: "" })
//   }
//   return (
//     <div className='flex justify-center items-center bg-red-500 h-96 w-96 flex-col'>
//       <div>Contact Me</div>
//       <div>
//         <input type="text"
//           placeholder='enter your name'
//           onChange={handlechange}
//           name='name'
//           value={data.name}
//         />
//       </div>
//       <div>
//         <input type="email"
//           placeholder='enter your email'
//           onChange={handlechange}
//           name='email'
//           value={data.email}
//         />
//       </div>
//       <div>
//         <input type="text"
//           placeholder='message'
//           onChange={handlechange}
//           name='message'
//           value={data.message}
//         />
//       </div>
//       <div>
//         <button onClick={handlesubmit}>Submit</button>
//       </div>
//     </div>
//   )
// }

export default ContactForm