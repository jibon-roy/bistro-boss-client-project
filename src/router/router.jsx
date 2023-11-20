import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Home from "../pages/home/home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PublicRoute from "./PublicRoute";
import Dashboard from "../layouts/dashboard/Dashboard";
import PrivetRouter from "./PrivetRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/ourMenu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/ourShop',
                element: <OurShop></OurShop>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>
    },
    {
        path: '/login',
        element: <PublicRoute><Login></Login></PublicRoute>
    },
    {
        path: '/register',
        element: <PublicRoute><Register></Register></PublicRoute>
    },
])

export default router;