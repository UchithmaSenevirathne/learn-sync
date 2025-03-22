import {SideBar} from "../components/SideBar.jsx";
import {Header} from "../components/Header.jsx";

export const PrivateLayout = () => {
    return (
        <div className="flex w-full h-screen">
            <SideBar/>
            <div className="flex flex-col flex-1">
                <Header/>
            </div>
        </div>
    )
}
