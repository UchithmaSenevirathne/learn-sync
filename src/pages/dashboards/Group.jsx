import {RiSettings5Fill} from "react-icons/ri";

export const Group = () => {
    return (
        <div className="flex flex-col font-anek p-5 gap-5">
            <div className="flex border-1 border-gray-300 rounded-xl p-3 items-center">
                <div className="flex flex-col border-r-1 border-gray-400 pr-10">
                    <h1 className="text-[20px] font-semibold">May</h1>
                    <h4 className="text-[15px] font-medium text-gray-700">Today is Saturday, May 9th, 2025</h4>
                </div>
                <div className="flex pl-5 items-center gap-2 flex-1">
                    <h1 className="text-[23px] font-semibold">Chat</h1>
                    <div className="text-[19px] font-medium text-gray-700">-</div>
                    <h4 className="text-[19px] font-medium text-gray-700">Group Chat</h4>
                </div>
                <div>
                    <button
                        className="text-[19px] font-semibold bg-black text-white rounded-xl w-[124px] justify-center pt-2">
                        New Chat
                    </button>
                </div>
            </div>
            <div className="flex gap-5">
                <div className="flex flex-col border border-gray-300 rounded-xl h-[690px] p-5 gap-5">
                    <div className="border border-gray-300 rounded-xl text-[18px] font-semibold pr-22 py-2 pl-2">Group
                        Chat 01
                    </div>
                    <div className="border border-gray-300 rounded-xl text-[18px] font-semibold pr-22 py-2 pl-2">Group
                        Chat 02
                    </div>
                    <div className="border border-gray-300 rounded-xl text-[18px] font-semibold pr-22 py-2 pl-2">Group
                        Chat 03
                    </div>
                </div>
                <div className="flex flex-col border border-gray-300 rounded-xl h-[690px] flex-1 p-5">
                    <div className="border border-gray-300 rounded-xl py-2 px-5 flex items-center justify-between">
                        <h1 className="text-[18px] font-semibold">My Group Chat</h1>
                        <RiSettings5Fill className="w-[25px] h-[25px]"/>
                    </div>
                    <div className="flex gap-20 p-5 justify-between h-[600px] overflow-auto">
                        <div>
                            {/*others' responses*/}
                        </div>
                        <div>
                            {/*your messages*/}
                        </div>
                    </div>
                    <input type="text" placeholder="Type ur Message ...."
                           className="border border-gray-300 rounded-2xl p-3 w-full focus:outline-none"/>
                </div>
            </div>
        </div>
    )
}
