import {Link, useLocation} from "react-router-dom";
import { CgMenuGridR, CgClipboard } from "react-icons/cg";
import {RiCalendarScheduleFill, RiLogoutCircleLine, RiSettingsFill} from "react-icons/ri";
import {BsChatText} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import {PiHeadCircuitFill} from "react-icons/pi";
import {ImUsers} from "react-icons/im";
import {GiThreeFriends} from "react-icons/gi";
import {useEffect, useState} from "react";

export const SideBar = () => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState("/task");

    useEffect(() => {
        setActiveNav(location.pathname);
    }, [location.pathname]);

    const getLinkClasses = (path) => {
        return path === activeNav
            ? "bg-white custom-link flex items-center gap-1 py-1.5 px-3 rounded-l-xl transition-all ease-in-out duration-500 animate-color-change"
            : "text-gray-800 custom-link flex items-center gap-1 p-1.5 rounded-l-xl transition-all ease-in-out duration-500";
    };

    return (
        <div className="bg-[#E9EFF2] flex flex-col font-anek py-7 pl-7 gap-10">
            <h1 className="font-bold text-[30px] pr-7">Learn Sync</h1>
            <div className="mb-10 flex flex-col gap-2">
                <h4 className="font-semibold text-[12px] text-gray-400">MAIN</h4>
                <ul className="flex flex-col gap-2 w-full text-[17px] text-gray-800 font-medium">
                    <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
                        <CgMenuGridR className="w-[23px] h-[18px]"/>
                        Dashboard
                    </Link>
                    <Link to="/task" className={getLinkClasses("/task")}>
                        <CgClipboard className="w-[23px] h-[18px]"/>
                        Task
                    </Link>
                    <Link to="/schedule" className={getLinkClasses("/schedule")}>
                        <RiCalendarScheduleFill className="w-[23px] h-[18px]"/>
                        Schedule
                    </Link>
                    <Link to="/chat" className={getLinkClasses("/chat")}>
                        <BsChatText className="w-[23px] h-[18px]"/>
                        Chat
                    </Link>
                    <Link to="/group" className={getLinkClasses("/group")}>
                        <HiUserGroup className="w-[23px] h-[18px]"/>
                        Group
                    </Link>
                    <Link to="/e-learn" className={getLinkClasses("/e-learn")}>
                        <PiHeadCircuitFill className="w-[23px] h-[18px]"/>
                        E-Learn
                    </Link>
                </ul>
            </div>
            <div className="mb-30 flex flex-col gap-2">
                <h4 className="font-semibold text-[12px] text-gray-400">RECORDS</h4>
                <ul className="flex flex-col gap-2 w-full text-[17px] text-gray-800 font-medium">
                    <Link to="/team" className={getLinkClasses("/team")}>
                        <ImUsers className="w-[23px] h-[18px]"/>
                        Team
                    </Link>
                    <Link to="/friends" className={getLinkClasses("/friends")}>
                        <GiThreeFriends className="w-[23px] h-[18px]"/>
                        Friends
                    </Link>
                </ul>
            </div>
            <div  className="flex flex-col gap-2">
                <h4 className="font-semibold text-[12px] text-gray-400">OTHERS</h4>
                <ul className="flex flex-col gap-2 w-full text-[17px] text-gray-800 font-medium">
                    <Link to="/settings" className={getLinkClasses("/settings")}>
                        <RiSettingsFill className="w-[23px] h-[18px]"/>
                        Setting
                    </Link>
                    <Link to="/login" className={getLinkClasses("/login")}>
                        <RiLogoutCircleLine className="w-[23px] h-[18px]"/>
                        Logout
                    </Link>
                </ul>
            </div>
        </div>
    )
}
