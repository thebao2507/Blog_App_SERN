import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../context/authContext"

const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext)

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-0">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className='flex'>
                            <Link className='text-white rounded-md pr-6 py-3 px-4 tracking-wider hover:bg-deep-orange-50 ml-2 hover:text-blue-gray-900' to='/'>Blog App</Link>
                        </div>
                    </div>
                    <div className='text-white pr-10 space-x-2'>
                        <span className='text-white tracking-widest'>{currentUser?.username}</span>
                        {currentUser ?
                            <Link className="text-white bg-red-400 hover:bg-red-600 font-bold py-3 px-4 rounded" onClick={logout}>
                                Log out
                            </Link> :
                            <Link to='/login' className="text-white bg-red-400 hover:bg-red-600 font-bold py-3 px-4 rounded">
                                Log In
                            </Link>
                        }
                        <Link to='/write' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                            Create post
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar