import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./User/Pages/Home"
import Layout from "./User/Pages/Layout"
import AboutUs from "./User/Pages/AboutUs"
import Contact from "./User/Pages/Contact"
import Login from "./User/Pages/Login"
import Signup from "./User/Pages/Signup"
import Products from "./User/Pages/Products"

// Admin imports
import AdminLayout from "./admin/Layout/Layout"
import AdminOrders from "./admin/pages/Orders"
import AdminProducts from "./admin/pages/Products"
import AdminUser from "./admin/pages/Users"
import Dashboard from "./admin/pages/Dashboard"
import Payment from "./admin/pages/Payment"
import UserProfile from "./admin/pages/UserProfile"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/orders",
          element: <AdminOrders />,
        },
        {
          path: "/admin/products",
          element: <AdminProducts />,
        },
        {
          path: "/admin/users",
          element: <AdminUser />,
        },
        {
          path: "/admin/payments",
          element: <Payment />,
        },
        {
          path: "/admin/userprofile",
          element: <UserProfile />,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
