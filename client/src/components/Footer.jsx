import React from 'react'
import {
    BsFacebook, BsInstagram, BsTwitter, BsGithub
} from 'react-icons/bs'
import { GiBasketballBall } from 'react-icons/gi'

const Footer = () => {
    return (
        <section className="bg-blue-gray-800">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className='flex justify-center mt-2 space-x-6 text-gray-400 font-semibold'>hello website</div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <BsFacebook className='w-5 h-5' />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <BsInstagram className='w-5 h-5' />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <BsTwitter className='w-5 h-5' />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <BsGithub className='h-5 w-5' />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <GiBasketballBall className='h-5 w-5' />
                    </a>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    2023 Welcom to maley, Inc. Florentino.
                </p>
            </div>
        </section>
    )
}

export default Footer