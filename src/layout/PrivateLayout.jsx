import {SideBar} from "../components/SideBar.jsx";
import {Header} from "../components/Header.jsx";
import {Outlet} from "react-router-dom";

export const PrivateLayout = () => {
    return (
        <div className="flex w-full h-screen">
            <SideBar/>
            <div className="flex flex-col flex-1">
                <Header/>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
