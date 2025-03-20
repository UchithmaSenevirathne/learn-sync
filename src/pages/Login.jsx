import User from "/src/assets/authriz-assets/User.png"
import Lock from "/src/assets/authriz-assets/Lock.png"
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-[#E9EFF2] flex items-center justify-center font-anek h-screen">
            <div className="bg-white flex items-center justify-center flex-col w-[90%] py-40 rounded-xl">
                <h1 className="font-medium text-[45px] text-[#1D4DAF]">Login</h1>
                <p className="font-medium text-[19px] text-gray-500 p-2">Hey enter your details to sign your Account</p>
                <form className="w-100 gap-5 flex flex-col mt-10">
                    <div
                        className="flex items-center justify-items-start border-1 border-gray-300 rounded-md w-full gap-2 p-2">
                        <img src={User} alt="User"/>
                        <input type="email" placeholder="Enter your username or email"
                               className="flex-1 text-[17px] font-medium focus:outline-none"/>
                    </div>
                    <div
                        className="flex items-center justify-items-start border-1 border-gray-300 rounded-md w-full gap-2 p-2">
                        <img src={Lock} alt="Lock"/>
                        <input type="password" placeholder="Enter your password"
                               className="flex-1 text-[17px] font-medium focus:outline-none"/>
                    </div>
                    <button className="text-[22px] font-semibold bg-[#4B2FC8] text-white p-1 rounded-md cursor-pointer">Login In</button>
                </form>
                <div className="flex gap-2 mt-10">
                    <p className="text-[19px] font-medium text-gray-500">Don’t have an Account ?</p>
                    <a className="text-[#4B2FC8] text-[18px] font-semibold cursor-pointer" onClick={() => navigate("/register")}>Signup now</a>
                </div>
            </div>
        </div>
    )
}
