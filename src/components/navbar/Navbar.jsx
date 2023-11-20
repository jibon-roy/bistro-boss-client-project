import { Link, NavLink } from "react-router-dom";
import './nav.css'
import Title from '/name.png'
import { FaCartPlus, FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../utilities/AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='blog'>CONTACT us</NavLink></li>
        {user && <li><NavLink to='/dashboard'>DASHBOARD</NavLink></li>}
        <li><NavLink to='/ourMenu'>Our Menu</NavLink></li>
        <li><NavLink to='ourShop'>Our Shop</NavLink></li>
        <li><NavLink to='blog'>
            <div className="indicator">
                <span className="indicator-item text-sm indicator-bottom badge badge-secondary">+1</span>
                <div className="grid place-items-center">
                    <FaCartPlus className="text-3xl"></FaCartPlus>
                </div>
            </div>
        </NavLink></li>
        {user ? <li><Link onClick={logOut}>Log Out</Link></li> : <li><NavLink to='/register'>Register</NavLink></li>}
        {user ? <li><Link>
            {user?.photoURL ? <img src={user.photoURL} className="w-8 rounded-full"></img> :
                <FaCircleUser className="text-3xl"></FaCircleUser>}
        </Link></li> : <li><NavLink to='/login'>Log In</NavLink></li>}
    </>

    return (
        <div className="drawer fixed z-20 max-w-[1920px]">
            <NavLink></NavLink>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-slate-800 bg-opacity-40 text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><Link to='/'><img src={Title} className="w-[200px]" alt="" /></Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal items-center uppercase font-bold text-base">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side text-white">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-[80%] min-h-full bg-slate-800">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;