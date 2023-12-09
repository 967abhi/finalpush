import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Profile from "../pages/Home/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cloud_drive from "../pages/Dashboard/Cloud_drive";
import Shared_drive from "../pages/Dashboard/Shared_drive"
// import Dashboar from "../pages/Home/Dashboar";
import HiproData from "../pages/Data/HiproData";
import SteadyData from "../pages/Data/SteadyData";
import UserDetails from "../pages/Details/UserDetails";
import HiproDetails from "../pages/Details/HiproDetails";
import SteadystepsDetails from "../pages/Details/SteadystepsDetails";

const Router= createBrowserRouter([
    {
        path:"/Dashboard",
        element: <Main/>,
        children:[
            {
                path:"/Dashboard",
                element:<Home/>,
            }
           

        ]

    },
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/Profile",
        element:<Profile/>
    },
    {
        path:"/Menu",
        element:<Dashboard/>
    },
    {
        path:"/CloudDrive",
        element:<Cloud_drive/>
    },
    {
        path:"/SharedDrive",
        element:<Shared_drive/>
    },
    {
        path:"/HiproData",
        element:<HiproData/>
    },
    {
        path:"/SteadyData",
        element:<SteadyData/>
    },
    {
        path:"/Userdetails",
        element:<UserDetails/>
    },
    {
        path:"/HiproDetails",
        element:<HiproDetails/>
    },
    {
        path:"/SteadyDetails",
        element:<SteadystepsDetails/>
    }


]);

export default Router;
