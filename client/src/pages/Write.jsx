import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom'

const Write = () => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState('')

    const navigate = useNavigate()

    const upload = async () => {
        try {
            const formData = new FormData()
            formData.append("file", file)
            const res = await axios.post("http://localhost:3333/api/upload", formData)
            return res.data
        } catch (err) {
            console.log(err)
        }
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    }

    const createNewPost = async (e) => {
        e.preventDefault()
        const imgUrl = upload()
        try {
            const response = await axios.post("http://localhost:3333/api/posts", {
                title,
                content,
                category,
                file: file ? imgUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form encType='multipart/form-data'>
            <div className='add'>
                <div className='content'>
                    <div className="mb-6 w-1/2">
                        <input
                            type="text"
                            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='editorContainer'>
                        <ReactQuill className='editor' theme="snow" value={content} onChange={newValue => setContent(newValue)} modules={modules} />
                    </div>
                </div>
                <div className='menuEdit'>
                    <div className='item'>
                        <h1>Action</h1>
                        <input className='' type="file" name='' id='file' onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor="file" className='cursor-pointer border-2 w-3/4 mb-2 mt-2 rounded text-center text-lg'>Upload Image</label>
                        <div className='flex'>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                onClick={createNewPost}
                            >
                                Create
                            </button>
                            <button
                                type="button"
                                className="text-white bg-green-700 hover:bg-green-800 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                    <div className='item'>
                        <h1>Category</h1>
                        <div className="category">
                            <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="border-2 p-1" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Write