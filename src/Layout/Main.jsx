import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            {!noHeaderFooter && <Footer />}
        </div>
    );
};

export default Main;