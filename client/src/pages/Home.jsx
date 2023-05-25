import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import axios from 'axios'


const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/api/posts`)
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div>
                            <img src={post.img} alt='img' className='img' />
                        </div>
                        <div className="content text-sx tracking-wider font-medium">
                            <Link to={`/post/${post.id}`} className='font-semibold underline'>
                                <h1 className='my-2 text-xl'>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <div className='flex items-center'>
                                <span className='pb-1 pt-1 pr-1 font-bold'>Read post</span>
                                <BsArrowUpRightCircle className='h-5 w-5' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home