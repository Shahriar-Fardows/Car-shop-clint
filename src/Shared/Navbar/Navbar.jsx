import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Layout/Auth/AuthProvider";


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const menu = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link>about</Link> </li>
        {
            user?.email ?
                <>
                    <li> <Link to='/booking'>Booking</Link> </li>
                    <li><button onClick={LogOut} >Log Out</button></li>
                </>
                :
                <li><Link to='/Login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img className="w-[4rem]" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;