import { NavLink, useLocation } from "react-router-dom";
import { GiPaintBucket } from "react-icons/gi";
import { useContext } from "react";
import { AuthCOntext } from "../Auth/AuthProvider";
import { Tooltip } from "react-tooltip";



const Navbar = () => {

    const { user, Logout, loading } = useContext(AuthCOntext);

    const PageLink = <>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black border-none' : ''} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black' : ''} to={'/allArt&Craft'}>All Art & craft</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black' : ''} to={'/addCraft'}>Add Craft</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'btn btn-sm bg-black lg:bg-white text-white lg:text-black' : ''} to={`/myArt&Craft/${user?.email}`}>My Art&Craft</NavLink>
    </>

    function handleLogout() {
        Logout()
    }

    const location = useLocation()
    console.log(location)




    return (
        <div className="bg-gradient-to-r from-purple-500 to-[#FF6AC2] *:text-white">

            <div className="navbar  md:max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-bold menu-sm dropdown-content mt-3 text-black z-50 p-2 shadow bg-base-100 rounded-box w-32 space-y-2">
                            {PageLink}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal font-bold flex items-center gap-4">
                            {PageLink}
                        </ul>
                    </div>

                </div>


                <div className="flex items-center animate__animated animate__pulse animate__delay-3s animate__infinite" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500" >
                    <p className="text-2xl text-[#40F8FF]"><GiPaintBucket /></p>
                    <h2 className="md:text-xl font-bold">
                        Paint<span className="text-[#40F8FF]">S</span>tation</h2>
                </div>

                <a id="my-anchor-element">.</a>
                <Tooltip
                    anchorSelect="#my-anchor-element"
                    content="Hello world!"
                />

                {
                    loading ?


                        user ?
                            <div className="navbar-end flex items-center gap-2">
                                <div>
                                    <a id="my-anchor-element">
                                        <div className="avatar placeholder">
                                            <div className=" rounded-full w-7 mt-1 ring ring-[#40F8FF] ring-offset-base-100 ">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </div>
                                    </a>
                                    <Tooltip
                                        anchorSelect="#my-anchor-element"
                                        content={user?.displayName}
                                    />
                                </div>

                                <button className=" text-base hover:underline  " onClick={handleLogout}>Logout</button>
                            </div> :
                            <div className="navbar-end flex items-center gap-1 md:gap-3">
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-sm' : 'text-base hover:underline'} to={'/Login'}>Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'btn btn-sm' : 'text-base hover:underline'} to={'/Register'}>Register</NavLink>
                            </div>
                        : <div className="navbar-end"><span className="loading loading-bars loading-md"></span></div>

                }

                {
                    location.pathname === '/' ?
                        <label className="swap swap-rotate border-l border-dashed border-white  ml-1.5 pl-1  " >

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value={'dark'} />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-7 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-6 h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                        : ''
                }



            </div>

        </div>
    );
};

export default Navbar;