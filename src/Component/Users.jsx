import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const Users = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
    });
    // message sent successfully matlab tyo enter gareko msg chai pugeo
    const URL = "http://localhost:5000/users"
    const fetchUsers = async () => {
        try {
            const req = await fetch(URL)
            if (req.ok) {
                const res_data = await req.json();
                console.log(res_data);
                setData(res_data)
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

    // const handleDelete = async (id) => {
    //     const URL = "http://localhost:5000/users/" + id

    //     const flag = window.confirm("Are you sure to delete it");
    //     if (flag) {



    //         try {
    //             const res = await fetch(URL, {
    //                 method: "DELETE"
    //             })

    //             toast.success("Deleted succesfully")
    //             fetchUsers();

    //         } catch (err) {
    //             toast.error("Error")
    //             console.log(err)
    //         }
    //     }
    // }

    const handleDelete = async (id) => {
        const URL = "http://localhost:5000/users/" + id

        const flag = window.confirm("Are you sure to delete it");
        if (flag) {



            try {
                const res = await fetch(URL, {
                    method: "DELETE"
                })

                toast.success("Deleted succesfully")
                fetchUsers();

            } catch (err) {
                toast.error("Error")
                console.log(err)
            }
        }
    }

    const handleEdit = async (id, updatedata) => {
        const URL = "http://localhost:5000/users/" + id

        const flag = window.confirm("Are you sure want to Edit?");
        if (flag) {



            try {
                const res = await fetch(URL, {
                    method: "PATCH"
                })

                toast.success("Edited succesfully")
                fetchUsers();

            } catch (err) {
                toast.error("Error")
                console.log(err)
            }
        }
    }




    const checkAuth = () => {
        const token = localStorage.getItem("token")
        if (token) {
            navigate('/dashboard')
        }
    }

    useEffect(() => {
        checkAuth()
        fetchLibrary()
    }, [])

    return (
        <div>

            <table className='class="min-w-full border m-auto divide-y divide-gray-200'>


                <tr>
                    <th className='px-6 py-3 text-2xl font-medium tracking-wider text-left text-gray-500 uppercase'>Name</th>
                    <th className='px-6 py-3 text-2xl font-medium tracking-wider text-left text-gray-500 uppercase'>Email</th>
                    <th className='px-6 py-3 text-2xl font-medium tracking-wider text-left text-gray-500 uppercase'>Phone</th>
                    <th className='px-6 py-3 text-2xl font-medium tracking-wider text-left text-gray-500 uppercase'>Edit</th>
                </tr>

                {
                    data.length > 0 && data?.map((item, i) => {
                        return <tr key={i}>
                            <td className='px-6 text-xl text-center text-black'>{item.name}</td>
                            <td className='px-6 text-xl text-center text-black'>{item.email}</td>
                            <td className='px-6 text-xl text-center text-black'>{item.phone}</td>
                            <td className='px-6 text-xl text-center text-black'><button onClick={() => navigate('/edit/' + item._id)} className='bg-blue-600 text-white p-2 rounded-lg'>Edit</button></td>
                            <td className='px-6 text-xl text-center text-black'><button onClick={() => handleDelete(item._id)} className='bg-red-600 text-white p-2 rounded-lg'>Delete</button></td>

                        </tr>
                    })
                }



                {/* <tr>
                    <td className='px-6 text-xl text-center text-black'>Partik</td>
                    <td className='px-6 text-xl text-center text-black'>Partik.loveuat2.com</td>
                    <td className='px-6 text-xl text-center text-black'>9801010102</td>
                </tr>

                <tr>
                    <td className='px-6 text-xl text-center text-black'>Sandesh</td>
                    <td className='px-6 text-xl text-center text-black'>Sandesh.loveuat2.com</td>
                    <td className='px-6 text-xl text-center text-black'>9801099999</td>
                </tr> */}


            </table>

        </div>
    );
};

export default Users
