import React from 'react'

const posts = [
    {
        id: 1,
        title: "Javascript fundamental for beginner",
        desc: "JavaScript was initially created to “make web pages alive.The programs in this language are called scripts. They can be written right in a web pages HTML and run automatically as the page loads.Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.",
        img: "data:image/png;base64,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",
    },
    {
        id: 2,
        title: "Express is library framework in nodeJS",
        desc: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
        img: "data:image/png;base64,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",
    },
    {
        id: 3,
        title: "Java programming language through interactive coding tasks",
        desc: "Learn the basic of Java programming language through interactive coding tasks. Students gain extensive hands-on experience writing, compiling, and executing Java programs after finishing the course.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvu0IT_6owjQ8CZKMPuJ6HZrm3hh3Rrf9q6g&usqp=CAU",
    },
    {
        id: 4,
        title: "Fate/stay night [Unlimited Blade Works]",
        desc: "Cuộc chiến tranh xoay quanh Chén Thánh - thứ đáp ứng mọi mong muốn của chủ nhân, trận chiến mấy chục năm mới xuất hiện 1 lần bắt đầu. 7 pháp sư giao kèo với 7 Servant để đánh cắp Chén Thánh",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmzOEGuxmVpb4PPgg6P-h4lV6uHXYjTkyJw&usqp=CAU",
    },
];


const Menu = () => {
    return (
        <div className='menu'>
            <h1>Other posts you may hate</h1>
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt="cc" />
                    <h2>{post.title}</h2>
                    <button className='bg-gray-400 py-2 rounded tracking-wider font-semibold hover:bg-gray-500'>Read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu