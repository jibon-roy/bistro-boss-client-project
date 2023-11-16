import { Outlet } from "react-router-dom";
import Navbar from "../../pages/home/navbar/Navbar";


const HomeLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default HomeLayout;