import {Navbar} from "../pages/website/Navbar.jsx";
import {Home} from "../pages/website/Home.jsx";

export const PublicLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-1">
                <Home/>
            </div>
        </div>
    )
}
