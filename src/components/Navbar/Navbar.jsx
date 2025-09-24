import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";


const Navbar = () => {
    return (
        <div className="bg-[#FAFAFA] shadow-sm sticky top-0 z-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link>
                        <img className="back" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-x-3">
                    <div>
                        <button className="btn border-none shadow-none rounded-4xl bg-transparent hover:bg-gray-200 duration-500">Become a Host</button>
                    </div>
                    <div className="btn border-none shadow-none py-2 px-3 bg-gray-200 rounded-full cursor-pointer">
                        <TfiWorld className="text-lg" />
                    </div>
                    <div className="dropdown p-0">
                        <div tabIndex={0} role="button" className="btn border-none shadow-none p-3 bg-gray-200 rounded-full cursor-pointer">
                            <FaBars className="text-base" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 absolute right-0 rounded-box z-1 mt-3 w-60 p-2 shadow-lg">
                            <li className="mb-1">
                                <Link className="text-[14px]"><FaRegQuestionCircle className="text-base" /> <span >Help Center</span></Link>
                            </li>
                            <li className="py-2 border-y border-gray-300">
                                <span className="text-[14px] font-semibold">Become A Host</span>
                                <p>It's easy to start hosting and earn extra income.</p>
                            </li>
                            <div className="py-2 border-b border-gray-300">
                                <li><Link className="text-[14px]">Refer a Host</Link></li>
                                <li><Link className="text-[14px]">Refer a co-Host</Link></li>
                                <li><Link className="text-[14px]">Gift cards</Link></li>
                            </div>
                            <li className="mt-1"><Link className="text-[14px]">Login in or Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;