import { Link, Outlet } from "react-router-dom";
import { FaCalendar, FaEnvelope, FaHome, FaRecycle, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-orange-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link><FaHome />User Home</Link></li>
                    <li><Link><FaWallet />Payment history</Link></li>
                    <li><Link to='/dashboard/mycart'><FaShoppingCart />My Cart</Link></li>
                    <li><Link><FaCalendar />Reservation</Link></li>
                    <div className="divider"></div>
                    <li><Link><FaHome />Home</Link></li>
                    <li><Link to="/menu"> <FaRecycle />Menu</Link></li>
                    <li><Link to="/order/salads"><FaShoppingBag /> Shop</Link></li>
                    <li><Link><FaEnvelope /> Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;