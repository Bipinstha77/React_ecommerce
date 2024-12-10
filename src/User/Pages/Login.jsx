import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.success) {
            navigate("/");
        } else {
            alert(result.message);
        }
    }
    return (    
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] py-16 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-mono font-semibold text-center mb-6">Login</h1>
                <hr className="border-t border-gray-200 mb-6" />
                <div>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                        />
                        <div className="flex flex-col items-center gap-2">
                            <a href="" className="text-sm text-gray-600 hover:text-gray-800 font-mono">Forgot Password?</a>
                            <p className="text-sm text-gray-600 font-mono">
                                Don't have an account? 
                                <a href="/signup" className="ml-1 text-[#4B5945] hover:text-[#3d4738] font-semibold">Sign up</a>
                            </p>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-[#4B5945] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d4738] transition-colors"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;
