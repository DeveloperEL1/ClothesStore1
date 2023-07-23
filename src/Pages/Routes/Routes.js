import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/signin',
        element: <SignIn />
    }
])