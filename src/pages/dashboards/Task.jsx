import {MdOutlineTune} from "react-icons/md";
import {BsCaretRightFill} from "react-icons/bs";
import {HiOutlineDotsVertical, HiPlus} from "react-icons/hi";

export const Task = () => {
    return (
        <div className="flex flex-col font-anek p-5">
            <div className="flex border-1 border-gray-300 rounded-xl p-3 items-center">
                <div className="flex flex-col border-r-1 border-gray-400 pr-10">
                    <h1 className="text-[20px] font-semibold">May</h1>
                    <h4 className="text-[15px] font-medium text-gray-700">Today is Saturday, May 9th, 2025</h4>
                </div>
                <div className="flex pl-5 items-center gap-2 flex-1">
                    <h1 className="text-[23px] font-semibold">Board</h1>
                    <div className="text-[19px] font-medium text-gray-700">-</div>
                    <h4 className="text-[19px] font-medium text-gray-700">Daily Tasks</h4>
                </div>
                <div className="flex gap-5">
                    <button
                        className="text-[19px] font-semibold flex border-1 border-gray-300 rounded-xl w-[124px] justify-center pt-2">
                        <MdOutlineTune className="h-[23px] w-[28px]"/>
                        Filters
                    </button>
                    <button
                        className="text-[19px] font-semibold bg-black text-white rounded-xl w-[124px] justify-center pt-2">
                        Create
                    </button>
                </div>
            </div>
            <div className="flex items-center pt-5 gap-5">
                <div className="flex flex-col border-1 border-gray-300 rounded-xl flex-1">
                    <div className="flex items-center justify-between border-b-1 border-gray-300 h-full py-3 px-2">
                        <div className="flex text-gray-800 items-center gap-2">
                            <BsCaretRightFill className="w-[16px] h-[19px]"/>
                            <h1 className="font-semibold text-[18px] pt-1.5">Todo List</h1>
                        </div>
                        <div className="flex text-gray-700 items-center gap-2">
                            <HiPlus className="w-[19px] h-[19px]"/>
                            <HiOutlineDotsVertical className="w-[18px] h-[18px]"/>
                        </div>
                    </div>
                    <div className="h-[630px] p-3"></div>
                </div>
                <div className="flex flex-col border-1 border-gray-300 rounded-xl flex-1">
                    <div className="flex items-center justify-between border-b-1 border-gray-300 h-full py-3 px-2">
                        <div className="flex text-gray-800 items-center gap-2">
                            <BsCaretRightFill className="w-[16px] h-[19px]"/>
                            <h1 className="font-semibold text-[18px] pt-1.5">In Progress</h1>
                        </div>
                        <div className="flex text-gray-700 items-center gap-2">
                            <HiPlus className="w-[19px] h-[19px]"/>
                            <HiOutlineDotsVertical className="w-[18px] h-[18px]"/>
                        </div>
                    </div>
                    <div className="h-[630px] p-3"></div>
                </div>
                <div className="flex flex-col border-1 border-gray-300 rounded-xl flex-1">
                    <div className="flex items-center justify-between border-b-1 border-gray-300 h-full py-3 px-2">
                        <div className="flex text-gray-800 items-center gap-2">
                            <BsCaretRightFill className="w-[16px] h-[19px]"/>
                            <h1 className="font-semibold text-[18px] pt-1.5">In Review</h1>
                        </div>
                        <div className="flex text-gray-700 items-center gap-2">
                            <HiPlus className="w-[19px] h-[19px]"/>
                            <HiOutlineDotsVertical className="w-[18px] h-[18px]"/>
                        </div>
                    </div>
                    <div className="h-[630px] p-3"></div>
                </div>
                <div className="flex flex-col border-1 border-gray-300 rounded-xl flex-1">
                    <div className="flex items-center justify-between border-b-1 border-gray-300 h-full py-3 px-2">
                        <div className="flex text-gray-800 items-center gap-2">
                            <BsCaretRightFill className="w-[16px] h-[19px]"/>
                            <h1 className="font-semibold text-[18px] pt-1.5">Done</h1>
                        </div>
                        <div className="flex text-gray-700 items-center gap-2">
                            <HiPlus className="w-[19px] h-[19px]"/>
                            <HiOutlineDotsVertical className="w-[18px] h-[18px]"/>
                        </div>
                    </div>
                    <div className="h-[630px] p-3"></div>
                </div>
            </div>
        </div>
    )
}
