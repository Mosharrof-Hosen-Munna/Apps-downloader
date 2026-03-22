import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppsDetails/AppDetails";
import NotFound from "../Pages/NotFound/NotFound";

const Routes = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children:[
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "apps",
                Component: Apps
            },
            {
                path: "apps/:id",
                Component: AppDetails
            },
            {
                path: "installation",
                loader: () => fetch('/apps.json').then(res => res.json()),
                Component: Installation
            },
            {
                path: "*",
                Component: NotFound
            }

        ]
    }
])

export default Routes