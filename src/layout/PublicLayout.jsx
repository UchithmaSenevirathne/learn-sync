import {Navbar} from "../pages/website/Navbar.jsx";
import {Home} from "../pages/website/Home.jsx";
import {About} from "../pages/website/About.jsx";
import {Services} from "../pages/website/Services.jsx";
import {Footer} from "../pages/website/Footer.jsx";

export const PublicLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <div className="flex-1">
                <Home/>
                <About/>
                <Services/>
            </div>
            <Footer/>
        </div>
    )
}
