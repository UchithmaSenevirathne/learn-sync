import './App.css'
import {Navbar} from "./pages/website/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicLayout} from "./layout/PublicLayout.jsx";
import {Home} from "./pages/website/Home.jsx";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";

function App() {

    const routes =createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
            children: [
                <Navbar/>,
                <Home/>,
            ]
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        }
    ])

  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
