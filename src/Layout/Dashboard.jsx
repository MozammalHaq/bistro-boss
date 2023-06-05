import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaRecycle, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensilSpoon, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load dynamic data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();


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
                    {
                        isAdmin
                            ? <>
                                <li><NavLink to='/dashboard/home'><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaUtensils />Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaUtensilSpoon />Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook />Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers />All Users
                                    {/* <span className="badge badge-secondary">+{cart?.length || 0}</span> */}
                                </NavLink></li>
                            </>
                            : <>
                                <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet />Payment history</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar />Reservation</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"> <FaRecycle />Menu</NavLink></li>
                    <li><NavLink to="/order/salads"><FaShoppingBag /> Shop</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;