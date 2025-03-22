import {IoHelpCircleSharp, IoNotificationsSharp} from "react-icons/io5";

export const Header = () => {
    return (
        <div className="flex justify-between items-center w-full py-4 px-5 font-anek shadow-md">
            <div className="flex flex-col">
                <h4 className="font-medium text-[14px] text-gray-700">Welcome,</h4>
                <h1 className="font-semibold text-[17px]">Iman Adithya</h1>
            </div>
            <div className="flex items-center">
                <IoNotificationsSharp  className="h-[28px] w-[28px] text-gray-600" />
                <IoHelpCircleSharp  className="h-[34px] w-[54px] text-gray-600"/>
            </div>
        </div>
    )
}
