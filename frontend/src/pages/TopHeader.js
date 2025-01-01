import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const TopHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleCloseMenu = () => {
        setMenuOpen(false);
    }
    return (
        <div> <nav class="px-4 lg:px-6 bg-emerald-700  dark:bg-gray-800">
            <div class="flex flex-wrap  md:justify-between justify-between items-center mx-auto max-w-screen-xl">

                <Link className='' to="/">
                    <img className='h-12 md:hidden block' src="/infa.png" alt='fgh' />

                </Link>




                <div class="flex items-center  lg:order-2">

                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-50 hover:text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={menuOpen ? "true" : "false"}
                        onClick={toggleMenu} >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg
                            className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        ><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div
                    className={`${menuOpen ? "block" : "hidden"
                        } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                    id="mobile-menu-2"
                >

                    <ul class="flex lg:list-disc marker:text-xl  text-white flex-col items-center font-medium lg:flex-row lg:space-x-4 lg:mt-0 ">

                        <li className="[&:first-child]:list-none ">
                            <Link href={"/login"}
                                className="block  text-white px-8 py-2  font-bold  transition-all outline-none">Lottery
                            </Link>
                        </li>


                        <li className=''>
                            <Link href={"/login"}
                                className="block text-white px-8 py-2 font-bold transition-all outline-none">SportBook1
                            </Link>
                        </li>



                        <li>
                            <Link to={"/"}
                                className="block text-white px-8 py-2  font-bold   transition-all outline-none">Exchange
                            </Link>
                        </li>



                        <li>
                            <Link onClick={toggleCloseMenu} to={"/owncasino"}
                                className="block text-white px-8 py-2  font-bold   transition-all outline-none">Live Casino
                            </Link>
                        </li>

                        <li>
                            <Link onClick={toggleCloseMenu} to="/slot"
                                className="block text-white px-8 py-2 font-bold   transition-all outline-none">Slot
                            </Link>
                        </li>


                        <li>
                            <Link to={"/fantasy"} onClick={toggleCloseMenu}
                                className="block text-white px-8 py-2 font-bold   transition-all outline-none">Fantasy Games
                            </Link>
                        </li>










                    </ul>

                </div>



            </div>
        </nav>

            <div className='bg-gray-200 md:flex pt-1 justify-between '>
                <img className='h-12 md:block hidden' src="/infa.png" alt='fgh' />


                <div className='flex  bg-gray-400 py-1  items-center gap-1'>
                    <div className="overflow-hidden">
                        <div className="marquee whitespace-nowrap flex items-center animate-marquee">
                            <p className="text-sm">Live sports and Famous fantasy games available on our exchange. Play to win big</p>
                        </div>

                    </div>
                    <img className="w-6  bg-gray-400 animate-bounce h-6 mr-2" src="/speaker.png" alt="Speaker" />
                </div>




                <div className="flex justify-center p-1 gap-4">
                    {/* Points and Experience Card */}
                    <div className="flex items-center justify-between pr-3 bg-gray-300 w-40 rounded-md shadow-lg">
                        <div className="flex items-center justify-center bg-gray-400 p-2 rounded-l-md">
                            <FaWallet className="w-6 h-6 " />
                        </div>
                        <div className="text-sm pl-2">
                            <p>Pts: 1500</p>
                            <p>Exp: 0</p>
                        </div>
                    </div>

                    {/* User Info Card */}
                    <div className="flex items-center justify-between pr-3 bg-gray-300 w-40 rounded-md shadow-lg">
                        <div className="flex items-center justify-center bg-gray-400 p-2 rounded-l-md">
                            <FaUser className="w-6 h-6" />
                        </div>
                        <div className="text-sm pl-2">
                            <p>Demo</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TopHeader