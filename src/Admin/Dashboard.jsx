import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();

    const checkAuth = () => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate('/login')
        }
    }

    useEffect(() => {
        checkAuth()
    }, [])
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard