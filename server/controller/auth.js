import connect from '../database.js'
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
    //check user existing
    const queryCheck = "SELECT * FROM users WHERE email = ? OR username = ?"
    connect.query(queryCheck, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User already exists!")
        //hash password and create user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const queryInsert = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]

        connect.query(queryInsert, [values], (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json("User has been created.")
        })
    })
}

export const login = (req, res) => {
    //check username and password
    const queryCheck = "SELECT * FROM users WHERE username = ?"
    connect.query(queryCheck, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length === 0) return res.status(404).json('user not found')
        const isPassCorrect = bcrypt.compareSync(req.body.password, data[0].password)
        if (!isPassCorrect) return res.status(400).json('wrong username and password')
        //token
        const token = jwt.sign(
            { id: data[0].id }, "jwtkey"
        )
        //console.log('token' + token)
        const { password, ...other } = data[0];
        //console.log(data)
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other)
        //console.log(req.cookie)
    })

}

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
}