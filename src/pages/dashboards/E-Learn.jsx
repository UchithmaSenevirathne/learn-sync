export const ELearn = () => {
    return (
        <div className="flex flex-col font-anek p-5 gap-5">
            <div className="flex border-1 border-gray-300 rounded-xl p-3 items-center">
                <div className="flex flex-col border-r-1 border-gray-400 pr-10">
                    <h1 className="text-[20px] font-semibold">May</h1>
                    <h4 className="text-[15px] font-medium text-gray-700">Today is Saturday, May 9th, 2025</h4>
                </div>
                <div className="flex pl-5 items-center gap-2 flex-1">
                    <h1 className="text-[23px] font-semibold">Channel</h1>
                    <div className="text-[19px] font-medium text-gray-700">-</div>
                    <h4 className="text-[19px] font-medium text-gray-700">using browser</h4>
                </div>
                <div>
                    <button
                        className="text-[19px] font-semibold bg-black text-white rounded-xl w-[124px] justify-center pt-2">
                        Refresh
                    </button>
                </div>
            </div>
            <div className="flex flex-col border border-gray-300 rounded-xl h-[690px] items-center p-5">
                <input type="text" placeholder="Search Any Thing...." className="border border-gray-300 rounded-2xl p-3 w-[700px] focus:outline-none"/>
                <div className="grid grid-cols-3 gap-10 p-10">
                    <div className="flex flex-col border border-gray-300 rounded-xl h-[250px] w-[400px] p-3">
                        <div className="flex-1"></div>
                        <h1 className="text-[17px] font-medium text-gray-400">Css Flex box : 01</h1>
                    </div>
                    <div className="flex flex-col border border-gray-300 rounded-xl h-[250px] w-[400px] p-3">
                        <div className="flex-1"></div>
                        <h1 className="text-[17px] font-medium text-gray-400">Css Flex box : 02</h1>
                    </div>
                    <div className="flex flex-col border border-gray-300 rounded-xl h-[250px] w-[400px] p-3">
                        <div className="flex-1"></div>
                        <h1 className="text-[17px] font-medium text-gray-400">Css Flex box : 03</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
