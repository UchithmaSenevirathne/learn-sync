import './App.css'
import {Navbar} from "./pages/website/Navbar.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicLayout} from "./layout/PublicLayout.jsx";
import {Home} from "./pages/website/Home.jsx";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";
import {PrivateLayout} from "./layout/PrivateLayout.jsx";
import {Task} from "./pages/dashboards/Task.jsx";
import {Chat} from "./pages/dashboards/Chat.jsx";
import {ELearn} from "./pages/dashboards/E-Learn.jsx";
import {Group} from "./pages/dashboards/Group.jsx";

function App() {

    const routes =createBrowserRouter([
        {
            path: "/",
            element: <PublicLayout/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/",
            element: <PrivateLayout/>,
            children: [
                {path:"/task", element: <Task/>},
                {path:"/chat", element: <Chat/>},
                {path:"/e-learn", element: <ELearn/>},
                {path:"/group", element: <Group/>},
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
