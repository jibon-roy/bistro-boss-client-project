import {
    createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Home from "../pages/home/home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";

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
    }
])

export default router;