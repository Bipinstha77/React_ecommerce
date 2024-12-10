import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await response.json()
        console.log(result)
        if(result.success){
            navigate("/login")
        }
        else{
            alert(result.message)
        }

    }

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] py-16 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-mono font-semibold text-center mb-6">Sign Up</h1>
                <hr className="border-t border-gray-200 mb-6" />
                <div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                            name="name"
                            required
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                            name="email"
                            required
                        />
                        <div className="flex flex-row gap-2">

                        <input 
                            type="text" 
                            placeholder="Address" 
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                            name="address"
                            required
                        />
                        <input 
                            type="text" 
                            placeholder="Phone Number" 
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                            name="phone"
                            required
                        />
                        </div>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full p-3 rounded bg-[#91AC8F] text-white placeholder-gray-200 focus:outline-none"
                            name="password"
                            required
                        />
                        
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-sm text-gray-600 font-mono">
                                Already have an account? 
                                <a href="/login" className="ml-1 text-[#4B5945] hover:text-[#3d4738] font-semibold">Login</a>
                            </p>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-[#4B5945] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d4738] transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup;
