import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import TopHeader from "./TopHeader";

const Layout = () => {
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleCloseMenu = () => {
        setMenuOpen(false);
    }

    // Conditional Header logic
    let header;
    if (location.pathname.startsWith("/owncasino")) {
        header = <header className='bg-pin-500  fixed w-full  top-0 z-50 '>
            <TopHeader />

            <div className='md:block hidden  fixed h-full px-1 py-1 w-56 mt-1 bg-gray-200 '>

                <div className="grid grid-cols-2 font-semibold text-sm uppercase gap-1.5 w-full max-w-lg mx-auto ">
                    <button className="flex  flex-col  p-0.5  items-center border-black border">
                        <img className="size-6" src="/19.png" />
                        <p>Our Casino</p>
                    </button>

                    <button className="flex  flex-col  p-0.5 items-center border-black border">
                        <img className="size-6" src="/19.png" />
                        <p>Our virtual</p>
                    </button>

                    <button className="flex  flex-col items-center p-0.5 border-black border">
                        <img className="size-6" src="/tembo.png" />
                        <p>Tembo</p>
                    </button>

                    <button className="flex flex-col items-center p-0.5 border-black border">
                        <img className="size-6" src="/evo.png" />
                        <p>Evolution</p>
                    </button>

                    <button className="flex flex-col items-center p-0.5 border-black border">
                        <img className="size-6" src="/1.png" />
                        <p>Ezugi</p>
                    </button>

                </div>





            </div>


        </header>; // Customize this header
    } else if (location.pathname.startsWith("/slot")) {
        header = <header className='bg-pin-500  fixed w-full  top-0 z-50 '>
            <TopHeader />
            <div className='md:block hidden  fixed h-full px-1 py-1 w-56 mt-1 bg-gray-200 '>

                <div className="grid grid-cols-2 font-semibold text-sm  gap-1.5 w-full max-w-lg mx-auto ">
                    <button className="px-0.5 py-2.5 uppercase  items-center border-black border">
                        <p>Turbo Games</p>
                    </button>

                    <button className="px-0.5 py-2.5 uppercase  items-center border-black border">
                        <p>Netent</p>
                    </button>


                    <button className="px-0.5 py-2.5 uppercase  items-center border-black border">
                        <p>Red Tiger</p>
                    </button>

                    <button className="px-0.5 py-3.5 uppercase  items-center border-black border">
                        <p>1X2 Gaming</p>
                    </button>


                    <button className="px-0.5 py-1.5 uppercase  items-center border-black border">
                        <p>Blueprint Gaming</p>
                    </button>
                    <button className="px-0.5 py-2.5 uppercase  items-center border-black border">
                        <p>Booongo</p>
                    </button>








                </div>

            </div>


        </header>
    } else if (location.pathname.startsWith("/fantasy")) {
        header = <header className='bg-pin-500  fixed w-full  top-0 z-50 '>
            <TopHeader />
            <div className='md:block hidden  fixed h-full px-1 py-1 w-56 mt-1 bg-gray-200 '>

                <div className="grid grid-cols-2 font-semibold text-sm uppercase gap-1.5 w-full max-w-lg mx-auto ">
                    <button className="flex  flex-col  p-0.5  items-center border-black border">
                        <img className="size-6" src="/smart.png" />
                        <p>Smart</p>
                    </button>

                    <button className="flex  flex-col  p-0.5 items-center border-black border">
                        <img className="size-6" src="/19.png" />
                        <p>Our</p>
                    </button>

                    <button className="flex  flex-col items-center p-0.5 border-black border">
                        <img className="size-6" src="/tembo.png" />
                        <p>Tembo</p>
                    </button>

                    <button className="flex flex-col items-center p-0.5 border-black border">
                        <img className="size-6" src="/evo.png" />
                        <p>Evolution</p>
                    </button>

                    <button className="flex flex-col items-center p-0.5 border-black border">
                        <img className="size-6" src="/1.png" />
                        <p>Ezugi</p>
                    </button>

                </div>

            </div>


        </header>
    } else {
        header = <Header />; // Default Header
    }

    return (
        <>
            {header}
            <main className="pt-4 md:ml-60 mx-2 md:mt-[77px] mt-24 mb-10">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
