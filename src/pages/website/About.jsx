import AboutImg from '/src/assets/website-assets/images/about1.png'
import Goal from '/src/assets/website-assets/images/Goal.png'
import MilleniumEye from '/src/assets/website-assets/images/MilleniumEye.png'
import Happy from '/src/assets/website-assets/images/Happy.png'
import Headsets from '/src/assets/website-assets/images/Headset.png'
import StudentMale from '/src/assets/website-assets/images/StudentMale.png'

export const About = () => {
    return (
        <div className="font-anek py-30 px-50 flex flex-col">
            <div className="flex items-center justify-between gap-20">
                <img src={AboutImg} alt="about" className="w-[730px] h-[722px]"/>
                <div className="flex flex-col">
                    <div className="flex flex-col mb-10">
                        <h1 className="text-[45px] font-bold">Learn New Skills To Go <span className="text-[#32CB81]">A Head For Your</span> Career.
                        </h1>
                        <p className="font-medium text-[20px] text-[#1A2D62B2]">Learn new skills to advance your career,
                            gain knowledge, boost confidence, and achieve success.</p>
                    </div>
                    <div className="shadow-lg w-[683px] h-[139px] flex items-center rounded-xl px-7 gap-5 mb-5">
                        <img src={Goal} alt="goal" className="w-[61px] h-[61px]"/>
                        <div className="flex flex-col">
                            <h1 className="text-[22px] font-semibold">Our Mission</h1>
                            <p className="text-[17px] font-medium text-[#1A2D62B2]">Our mission is to empower learning,
                                inspire growth, foster innovation, and ensure success globally.</p>
                        </div>
                    </div>
                    <div className="shadow-lg w-[683px] h-[139px] flex items-center rounded-xl px-7 gap-5 mb-10">
                        <img src={MilleniumEye} alt="goal" className="w-[61px] h-[61px]"/>
                        <div className="flex flex-col">
                            <h1 className="text-[22px] font-semibold">Our Vision</h1>
                            <p className="text-[17px] font-medium text-[#1A2D62B2]">Our vision is to create a smarter
                                future through innovation, learning, growth, and global impact.</p>
                        </div>
                    </div>
                    <button
                        className="bg-[#32CB81] text-white text-[20px] font-semibold w-[227px] h-[51px] rounded-2xl pt-2">Discover
                        more
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-30">
                <div className="flex flex-col mb-10">
                    <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-[25px] text-[#32CB81]">Some Fun Fact</h4>
                        <div className="h-0.5 w-[167px] border-t-3 border-[#32CB81]"></div>
                    </div>
                    <h1 className="text-[45px] font-bold ">Our Great <span className="text-[#32CB81]">Achievement</span>
                    </h1>
                </div>
                <div className="flex items-center justify-between">
                    <div className="shadow-lg w-[355px] h-[110px] rounded-xl flex px-5 gap-3 items-center">
                        <img src={Happy} alt="happy" className="w-[57px] h-[60px]"/>
                        <div className="flex flex-col">
                            <h1 className="text-[35px] font-bold">854</h1>
                            <p className="font-medium text-[18px] text-[#1A2D62B2]">Enrolled Students</p>
                        </div>
                    </div>
                    <div className="shadow-lg w-[355px] h-[110px] rounded-xl flex px-5 gap-3 items-center">
                        <img src={StudentMale} alt="happy" className="w-[57px] h-[60px]"/>
                        <div className="flex flex-col">
                            <h1 className="text-[35px] font-bold">521</h1>
                            <p className="font-medium text-[18px] text-[#1A2D62B2]">Academic Programs</p>
                        </div>
                    </div>
                    <div className="shadow-lg w-[355px] h-[110px] rounded-xl flex px-5 gap-3 items-center">
                        <img src={Headsets} alt="happy" className="w-[67px] h-[62px]"/>
                        <div className="flex flex-col">
                            <h1 className="text-[35px] font-bold">163</h1>
                            <p className="font-medium text-[18px] text-[#1A2D62B2]">Winning Award</p>
                        </div>
                    </div>
                    <div className="shadow-lg w-[355px] h-[110px] rounded-xl flex px-5 gap-3 items-center">
                        <img src={StudentMale} alt="happy" className="w-[57px] h-[60px]"/>
                        <div className="flex flex-col">
                            <h1 className="text-[35px] font-bold">93</h1>
                            <p className="font-medium text-[18px] text-[#1A2D62B2]">Certified Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
