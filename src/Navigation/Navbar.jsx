import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { FcServices } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";


const data = [
    {
        id: 1,
        title: "Home",
        to: "/",
        icon: <FaHome />
    },
    {
        id: 2,
        title: "About",
        to: "/about",
        icon: <  FaInfoCircle />
    },
    {
        id: 3,
        title: "Experiences",
        to: "/experiences",
        icon: <FaGears />
    },


    {
        id: 4,
        title: "Contact",
        to: "/contact",
        icon: <MdOutlineContactPhone />
    },

    {
        id: 5,
        title: "Services",
        to: "/Services",
        icon: <FcServices />
    }


    // {
    //     id: 5,
    //     title: "Login",
    //     to: "/login",
    //     icon: <RiLoginBoxFill />
    // },
];

const Navbar = () => {
    const navigate = useNavigate()
    const [active, setactive] = useState(0)
    return (
        <>

            <nav className='bg-black flex justify-end align-middle text-white border-b-2 border-white h-24'>
                <div className='flex justify-start w-full '>
                    <img src="Amit Poudel Logo.jpg" alt=""
                        className='h-20 w-30 ml-16' />
                </div>
                <ul className='flex gap-20 h-20  text-xl font-semibold font-sans  mr-20'>
                    {data.map((item, i) => {
                        return (
                            <li className='flex align-middle' key={item.id}>
                                <Link className='flex items-center gap-2 justify-center mt-7' to={item.to} >{item.icon} {item.title}</Link>
                            </li>
                        )
                    })}

                    {!localStorage.getItem("token")
                        ? <li className='flex align-middle'>
                            <Link className='flex align-middle mt-7 items-center gap-2' to="login" >  <LuLogIn />Login </Link>
                        </li> :

                        <>
                            <li className='flex align-middle'>
                                <Link className='flex align-middle mt-7' to="/" >Welcome</Link>
                            </li>

                            <li className='flex align-middle'>

                                <button onClick={() => {
                                    localStorage.removeItem("token")
                                    navigate('/login')

                                }}>Logout</button>

                                {/* <Link className='flex align-middle mt-7' >Logout</Link> */}
                            </li>

                        </>
                    }

                </ul>
            </nav>


        </>
    );
}

export default Navbar;