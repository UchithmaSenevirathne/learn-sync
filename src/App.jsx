import './App.css'
import {Navbar} from "./pages/website/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicLayout} from "./layout/PublicLayout.jsx";
import {Home} from "./pages/website/Home.jsx";

function App() {

    const routes =createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
            children: [
                <Navbar/>,
                <Home/>,
            ]
        }
    ])

  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
