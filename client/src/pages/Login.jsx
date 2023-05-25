import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext'

const Login = () => {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })

    const [err, setErr] = useState(null)
    const { login } = useContext(AuthContext)
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            //await axios.post("http://localhost:3333/api/auth/login", inputs)
            await login(inputs)
            navigate('/')
        } catch (error) {
            setErr(error.response.data)
        }
    }
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl translate-y-1/4 border-2
                            shadow-lg shadow-indigo-500/30">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="block text-base font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="username"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md
                                focus:border-purple-400 focus:ring-purple-300 focus:outline-none
                                focus:ring focus:ring-opacity-40"
                            name='username'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-base font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border
                                    rounded-md focus:border-purple-400 focus:ring-purple-300
                                    focus:outline-none focus:ring focus:ring-opacity-40"
                            name='password'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors
                                        duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600
                                        focus:outline-none focus:bg-purple-600"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <p className='text-base text-red-600 text-center mt-4'>{err}</p>
                <p className="mt-8 text-sm font-light text-center text-gray-700">
                    Don't have an account?
                    <span className="font-bold text-purple-600 hover:underline">
                        <Link to='/register'> Register</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login