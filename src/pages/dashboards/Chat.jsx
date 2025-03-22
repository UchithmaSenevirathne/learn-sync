import {IoIosArrowForward} from "react-icons/io";

export const Chat = () => {
    return (
        <div className="flex flex-col font-anek p-5 gap-5">
            <div className="flex border-1 border-gray-300 rounded-xl p-3 items-center">
                <div className="flex flex-col border-r-1 border-gray-400 pr-10">
                    <h1 className="text-[20px] font-semibold">May</h1>
                    <h4 className="text-[15px] font-medium text-gray-700">Today is Saturday, May 9th, 2025</h4>
                </div>
                <div className="flex pl-5 items-center gap-2 flex-1">
                    <h1 className="text-[23px] font-semibold">Ai Chat</h1>
                    <div className="text-[19px] font-medium text-gray-700">-</div>
                    <h4 className="text-[19px] font-medium text-gray-700">using Gpt</h4>
                </div>
                <div>
                    <button
                        className="text-[19px] font-semibold bg-black text-white rounded-xl w-[124px] justify-center pt-2">
                        New Chat
                    </button>
                </div>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-xl h-[690px]">
                <div className="overflow-auto p-5 h-[600px]"></div>
                <div className="flex justify-between items-center mx-20 my-5 border border-gray-300 rounded-xl gap-5 px-5 pt-4 relative">
                    <textarea
                        placeholder="Ask Any Question ....."
                        className="flex-1 outline-none px-3 pt-3 placeholder-gray-400 resize-none h-14"
                    />
                    <IoIosArrowForward className="w-[35px] h-[35px] text-gray-400 pb-2"/>
                </div>
            </div>
        </div>
    )
}
