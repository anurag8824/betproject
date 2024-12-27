import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    // const location =useLocation();

    return (
        <>
            <Header />
            <main className="pt-4 md:ml-60 mx-2 mt-20 mb-10">
                <Outlet />


            </main>
            <Footer />

        </>
    )
};

export default Layout;
