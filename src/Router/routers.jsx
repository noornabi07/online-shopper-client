import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import Men from "../components/Men/Men";
import Women from "../components/Women/Women";
import Kids from "../components/Kids/Kids";
import Carts from "../components/Carts/Carts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path:'/men',
                element: <Men></Men>
            },
            {
                path: '/women',
                element: <Women></Women>
            },
            {
                path: '/kids',
                element: <Kids></Kids>
            },
            {
                path: '/carts',
                element: <Carts></Carts>
            }
        ]
    }
])

export default router;