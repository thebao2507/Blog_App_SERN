import mysql2 from 'mysql2'

const connect = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "blog"
})

export default connect