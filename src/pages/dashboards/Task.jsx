import {MdOutlineTune} from "react-icons/md";
import {BsCaretRightFill} from "react-icons/bs";

export const Task = () => {
    return (
        <div className="flex flex-col font-anek p-5">
            <div className="flex border-1 border-gray-200 rounded-xl p-5 items-center">
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
            <div className="flex items-center">
                <div className="flex flex-col border-1 border-gray-200 rounded-xl">
                    <div>
                        <BsCaretRightFill />
                    </div>
                </div>
            </div>
        </div>
    )
}
