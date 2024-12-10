import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useTheme } from "../Hooks/useTheme";

function Layout(){
    const { theme } = useTheme();

    useEffect(() => {
        // Ensure the theme class is applied to the document
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return(
        <div className="min-h-screen dark:bg-gray-900">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ml-64 min-h-screen dark:bg-gray-900">
                    <Header/>
                    <main className="dark:bg-gray-900">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Layout;