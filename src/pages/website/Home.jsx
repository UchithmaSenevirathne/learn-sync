import HomeImg from '/src/assets/website-assets/images/home-image.png'
import Eclipse from '/src/assets/website-assets/images/Ellipse.png'
import RightArrow from '/src/assets/website-assets/icons/RightArrow.png'
import user2 from '/src/assets/website-assets/icons/user2.png'
import file2 from '/src/assets/website-assets/icons/file2.png'

export const Home = () => {
    return (
        <div className="bg-[#FFFBF7] flex items-center justify-center">
            <div className="flex items-center justify-between py-15 w-full pl-50 pr-40">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col font-bold text-[90px]">
                        <h1>Better <span className="text-[#32CB81]">Learning</span></h1>
                        <h1><span className="text-[#32CB81]">Future</span> Start</h1>
                        <h1>With Edusion</h1>
                    </div>
                    <p className="font-medium text-[20px] text-[#1A2D62B2]">Better learning enhances knowledge, boosts creativity, <br/>builds confidence, and ensures lifelong
                        success.
                    </p>
                    <div className="flex items-center pl-5 gap-2">
                        <img src={Eclipse} alt="eclipse" className="absolute left-49"/>
                        <p className="font-semibold text-[21px] z-10">Explore Courses</p>
                        <img src={RightArrow} alt="rightarrow" className="pt-1"/>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div
                        className="flex bg-white rounded-2xl shadow-lg w-[222px] h-[95px] items-start justify-items-start gap-2 pl-2 absolute top-85 right-70">
                        <img src={user2} alt="user2" className="w-[45px] h-[41px] mt-3"/>
                        <div className="flex flex-col ">
                            <h1 className="font-bold text-[35px]">4500+</h1>
                            <p className="text-[#1A2D62B2] font-medium text-[16px]">Online Platforms</p>
                        </div>
                    </div>
                    <div
                        className="flex bg-white rounded-2xl shadow-lg w-[222px] h-[95px] items-start justify-items-start gap-2 pl-2 absolute top-150 right-180">
                        <img src={file2} alt="user2" className="w-[45px] h-[41px] mt-3"/>
                        <div className="flex flex-col ">
                            <h1 className="font-bold text-[35px]">7500+</h1>
                            <p className="text-[#1A2D62B2] font-medium text-[16px]">Active Students</p>
                        </div>
                    </div>
                    <img src={HomeImg} className="w-[753px] h-[787px]"/>
                </div>
            </div>
        </div>
    )
}
