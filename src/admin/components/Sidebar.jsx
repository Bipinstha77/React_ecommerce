import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaProductHunt, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";

function Sidebar() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 w-64 h-screen border-r border-gray-200 dark:border-gray-700 fixed shadow-lg font-mono">
            <div className="p-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    Admin Panel
                </h1>
                <hr className="mt-4 border-gray-200 dark:border-gray-700"/>
            </div>
            <div className="flex flex-col gap-3 p-4">
                <Link 
                    to="/admin" 
                    className="flex items-center gap-3 text-xl p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                    <MdDashboard size={24} className="text-gray-600 dark:text-gray-400"/>
                    Dashboard
                </Link>
                <Link 
                    to="/admin/users" 
                    className="flex items-center gap-3 text-xl p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                    <FaUsers size={24} className="text-gray-600 dark:text-gray-400"/>
                    Users
                </Link>
                <Link 
                    to="/admin/products" 
                    className="flex items-center gap-3 text-xl p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                    <FaProductHunt size={24} className="text-gray-600 dark:text-gray-400"/>
                    Products
                </Link>
                <Link 
                    to="/admin/orders" 
                    className="flex items-center gap-3 text-xl p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                    <FaShoppingCart size={24} className="text-gray-600 dark:text-gray-400"/>
                    Orders
                </Link>
                <Link 
                    to="/admin/payments" 
                    className="flex items-center gap-3 text-xl p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 hover:shadow-md transition duration-200 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                    <FaMoneyBill size={24} className="text-gray-600 dark:text-gray-400"/>
                    Payments
                </Link>
                <div className="flex-grow"></div>
                <Link 
                    to="/logout" 
                    className="flex items-center gap-3 text-xl p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition duration-200 mt-auto"
                >
                    <FaSignOutAlt size={24}/>
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;