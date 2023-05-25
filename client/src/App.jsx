import {
    createBrowserRouter,
    RouterProvider,
    //Router,
    //Link,
    Outlet
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'
import Single from './pages/Single'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import ErrorPage from './pages/Error-page'
import './style.scss'

// dùng khi các page có chung các component navbar hoặc footer
const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/write",
                element: <Write />
            },
            {
                path: "/post/:id",
                element: <Single />
            },
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])

function App() {
    return <div className='app'>
        <div className='container_app'>
            <RouterProvider router={router} />
        </div>
    </div>
}

export default App;
