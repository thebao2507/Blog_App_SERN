import connect from '../database.js'
import jwt from "jsonwebtoken";

export const addPost = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json("Not authenticated!")
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!")
        const q =
            "INSERT INTO posts(`title`, `desc`, `img`, `category`, `date`,`uid`) VALUES (?)"
        const values = [
            req.body.title,
            req.body.desc,
            req.body.file,
            req.body.category,
            req.body.date,
            userInfo.id,
        ];
        connect.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.json("Post has been created.")
        })
    })
}

export const getPost = (req, res) => {
    const q =
        "SELECT p.id, `username`, `title`, `desc`, p.img, u.image AS userImg, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? "

    connect.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}

export const getPosts = (req, res) => {
    const q = "SELECT * FROM posts"
    connect.query(q, (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}

export const deletePost = async (req, res) => {
    const token = await req.cookies.access_token
    console.log(req)
    if (!token) return res.status(401).json("Not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!")
        const postId = req.params.id;
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"
        connect.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("You can delete only your post!");
            return res.json("Post has been deleted!")
        })
    })
}

export const updatePost = (req, res) => {
    res.json('from controller')
}

