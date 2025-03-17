import navIcon from '/src/assets/website-assets/icons/StudentMale.png'

export const Navbar = () => {
    return (
        <div className="bg-[#FFFFFF] flex items-center justify-between font-anek text-lg h-[92px] px-50 shadow-md z-10 relative text-[#1A2D62]">
            <div className="flex items-center justify-center gap-2">
                <img src={navIcon} alt="StudentMale Logo" className="w-[34px] h-[35px]"/>
                <h1 className="font-bold text-[25px]">Learn Sync</h1>
            </div>
            <div>
                <ul className="flex items-center justify-center space-x-5 text-[18px] font-semibold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className="bg-[#32CB81] font-semibold text-[18px] text-white rounded-2xl w-[138px] h-[43px]">Login</button>
            </div>
        </div>
    )
}
