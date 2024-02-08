import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ShopCategory from "../components/Pages/ShopCategory/ShopCategory";
import menBanner from '../components/assets/all-products/banner_mens.png'
import womenBanner from '../components/assets/all-products/banner_women.png'
import kidBanner from '../components/assets/all-products/banner_kids.png'


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
                element: <Home></Home>
            },
            {
                path:'/men',
                element:  <ShopCategory banner={menBanner} category='men'></ShopCategory> 
            },
            {
                path: '/women',
                element: <ShopCategory banner={womenBanner} category='women'></ShopCategory> 
            },
            {
                path: '/kids',
                element: <ShopCategory banner={kidBanner} category='kid'></ShopCategory> 
            },
            {
                path: '/carts',
                element: <ShopCategory></ShopCategory> 
            }
        ]
    }
])

export default router;