import { Link, NavLink, Outlet } from "react-router-dom";
import './links.css'
import { FaHome } from "react-icons/fa";
import Title from '/logo_w.png'
import { FaBook, FaCalendar, FaCartArrowDown, FaMoneyBill, FaStar, } from "react-icons/fa6";

const Dashboard = () => {

    const navLinks = <>
        <li className="mb-10"><Link to='/'><img src={Title} className="w-[200px]" alt="" /></Link></li>
        <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
        <li><NavLink to='/'><FaCalendar></FaCalendar> Reservation</NavLink></li>
        <li><NavLink to='/'><FaMoneyBill></FaMoneyBill> Payment History</NavLink></li>
        <li><NavLink to='/'><FaCartArrowDown></FaCartArrowDown> My Cart</NavLink></li>
        <li><NavLink to='/'><FaStar></FaStar>Add Review</NavLink></li>
        <li><NavLink to='/'><FaBook></FaBook> My booking</NavLink></li>
        <div className="divider"></div>
        <li><NavLink to='/'><FaBook></FaBook> My booking</NavLink></li>
    </>

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mx-2 my-2">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-circle lg:hidden swap swap-rotate">
                        <input id='checkbox' name="checkbox" type="checkbox" />
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="dashboard menu p-4 w-80 min-h-full bg-[#D1A054] font-medium text-lg uppercase text-base-content">
                        {navLinks}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;