import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'

const Single = () => {

    const [post, setPost] = useState([])
    const location = useLocation()
    const naviagte = useNavigate()
    const postId = location.pathname.split("/")[2]
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/api/posts/${postId}`)
                setPost(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [postId])

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3333/api/posts/${postId}`);
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="single">
            <div className="content">
                <img src={post?.img} alt="ccc" className='w-full h-96 bg-cover' />
                <div className='user'>
                    <img src={post?.userImg} alt="image" />
                    <div className='info'>
                        <span className='font-bold tracking-wider'>{post.username}</span>
                        <p className='tracking-wider font-medium'>posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <AiOutlineEdit className='w-5 h-5 m-2 text-blue-gray-800' />
                        </Link>
                        <RiDeleteBack2Fill className='w-5 h-5 m-2 text-blue-gray-800' onClick={handleDelete} />
                    </div>}
                </div>
                <h1 className='text-xl font-bold text-blue-gray-800'>{post.title}</h1>
                <p className='font-medium tracking-wide'>{post.desc}</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single