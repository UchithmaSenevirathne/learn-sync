import Eclipse from '/src/assets/website-assets/images/Ellipse.png'


export const Services = () => {
    return (
        <div className="flex flex-col px-50 mb-40">
            <div className="flex flex-col mb-10">
                <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-[25px] text-[#32CB81]">Why Choose Edusion</h4>
                    <div className="h-0.5 w-[167px] border-t-3 border-[#32CB81]"></div>
                </div>
                <h1 className="text-[45px] font-bold ">Find the <span className="text-[#32CB81]">Best Features</span> Of
                    Edusion</h1>
            </div>
            <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col w-[474px] h-[277px] shadow-lg p-10 gap-5 justify-center rounded-xl">
                    <div className="flex items-center gap-5">
                        <img src={Eclipse} alt="Eclipse" className="w-[90px] h-[85px]"/>
                        <h1 className="text-[23px] font-bold">Learn More<br/> Anywhere</h1>
                    </div>
                    <p className="font-medium text-[18px] text-[#1A2D62B2]">Explore, discover, study,
                        understand,<br/> grow, improve, educate, research,<br/> develop, master.
                    </p>
                </div>
                <div className="flex flex-col w-[474px] h-[277px] shadow-lg p-10 gap-5 justify-center rounded-xl">
                    <div className="flex items-center gap-5">
                        <img src={Eclipse} alt="Eclipse" className="w-[90px] h-[85px]"/>
                        <h1 className="text-[23px] font-bold">Expert<br/> Instructor</h1>
                    </div>
                    <p className="font-medium text-[18px] text-[#1A2D62B2]">An expert instructor teaches,
                        guides,<br/> motivates, communicates, inspires,<br/> engages effectively.</p>
                </div>
                <div className="flex flex-col w-[474px] h-[277px] shadow-lg p-10 gap-5 justify-center rounded-xl">
                    <div className="flex items-center gap-5">
                        <img src={Eclipse} alt="Eclipse" className="w-[90px] h-[85px]"/>
                        <h1 className="text-[23px] font-bold">Team<br/> Management</h1>
                    </div>
                    <p className="font-medium text-[18px] text-[#1A2D62B2]">Team management requires<br/> leadership,
                        coordination, motivation,<br/> collaboration.</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex flex-col w-[474px] h-[277px] shadow-lg p-10 gap-5 justify-center rounded-xl">
                    <div className="flex items-center gap-5">
                        <img src={Eclipse} alt="Eclipse" className="w-[90px] h-[85px]"/>
                        <h1 className="text-[23px] font-bold">Chat<br/> Experience</h1>
                    </div>
                    <p className="font-medium text-[18px] text-[#1A2D62B2]">Chat experience should be
                        smooth,<br/> interactive, engaging, responsive,<br/> efficient, user-friendly, and enjoyable.
                    </p>
                </div>
                <div className="flex flex-col w-[474px] h-[277px] shadow-lg p-10 gap-5 justify-center rounded-xl">
                    <div className="flex items-center gap-5">
                        <img src={Eclipse} alt="Eclipse" className="w-[90px] h-[85px]"/>
                        <h1 className="text-[23px] font-bold">Teacher<br/> Monitoring</h1>
                    </div>
                    <p className="font-medium text-[18px] text-[#1A2D62B2]">Teacher monitoring ensures<br/> performance,
                        guidance, feedback,<br/> effectiveness, and support.
                    </p>
                </div>
                <div className="flex flex-col w-[474px] h-[277px] shadow-lg p-10 gap-5 justify-center rounded-xl">
                    <div className="flex items-center gap-5">
                        <img src={Eclipse} alt="Eclipse" className="w-[90px] h-[85px]"/>
                        <h1 className="text-[23px] font-bold">24/7 Strong<br/> Support</h1>
                    </div>
                    <p className="font-medium text-[18px] text-[#1A2D62B2]">ensures reliability,
                        availability,<br/> efficiency, dedication, problem-solving,<br/> trust, consistency, and
                        satisfaction.</p>
                </div>
            </div>
        </div>
    )
}
