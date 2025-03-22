import {Link} from "react-router-dom";
import { CgMenuGridR, CgClipboard } from "react-icons/cg";
import {RiCalendarScheduleFill, RiLogoutCircleLine, RiSettingsFill} from "react-icons/ri";
import {BsChatText} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import {PiHeadCircuitFill} from "react-icons/pi";
import {ImUsers} from "react-icons/im";
import {GiThreeFriends} from "react-icons/gi";

export const SideBar = () => {
    return (
        <div className="bg-[#E9EFF2] flex flex-col font-anek p-7 gap-10">
            <h1 className="font-bold text-[30px]">Learn Sync</h1>
            <div className="mb-10 flex flex-col gap-2">
                <h4 className="font-semibold text-[12px] text-gray-400">MAIN</h4>
                <ul className="flex flex-col gap-5 w-full text-[17px] text-gray-800 font-medium">
                    <Link to="/dashboard" className="flex gap-1">
                        <CgMenuGridR className="w-[23px] h-[18px]"/>
                        Dashboard
                    </Link>
                    <Link to="/task" className="flex gap-1">
                        <CgClipboard className="w-[23px] h-[18px]"/>
                        Task
                    </Link>
                    <Link to="/schedule" className="flex gap-1">
                        <RiCalendarScheduleFill className="w-[23px] h-[18px]"/>
                        Schedule
                    </Link>
                    <Link to="/chat" className="flex gap-1">
                        <BsChatText className="w-[23px] h-[18px]"/>
                        Chat
                    </Link>
                    <Link to="/group" className="flex gap-1">
                        <HiUserGroup className="w-[23px] h-[18px]"/>
                        Group
                    </Link>
                    <Link to="/e-learn" className="flex gap-1">
                        <PiHeadCircuitFill className="w-[23px] h-[18px]"/>
                        E-Learn
                    </Link>
                </ul>
            </div>
            <div className="mb-30 flex flex-col gap-2">
                <h4 className="font-semibold text-[12px] text-gray-400">RECORDS</h4>
                <ul className="flex flex-col gap-5 w-full text-[17px] text-gray-800 font-medium">
                    <Link to="/team" className="flex gap-1">
                        <ImUsers className="w-[23px] h-[18px]"/>
                        Team
                    </Link>
                    <Link to="/friends" className="flex gap-1">
                        <GiThreeFriends className="w-[23px] h-[18px]"/>
                        Friends
                    </Link>
                </ul>
            </div>
            <div  className="flex flex-col gap-2">
                <h4 className="font-semibold text-[12px] text-gray-400">OTHERS</h4>
                <ul className="flex flex-col gap-5 w-full text-[17px] text-gray-800 font-medium">
                    <Link to="/settings" className="flex gap-1">
                        <RiSettingsFill className="w-[23px] h-[18px]"/>
                        Setting
                    </Link>
                    <Link to="/login" className="flex gap-1">
                        <RiLogoutCircleLine className="w-[23px] h-[18px]"/>
                        Logout
                    </Link>
                </ul>
            </div>
        </div>
    )
}
