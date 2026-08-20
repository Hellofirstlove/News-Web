import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Component/Pages/Home";
import CategoryNews from "../Component/Pages/categorynews";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Component/Pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element: <Home></Home>
            },
            {
                path:"/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch("/news.json"),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element: <Login></Login>
            },
            {
                path:"/auth/register",
                element: <Register></Register>
            },
        ],
    },
    {
        path: "/news-details/:id",
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("/news.json")
    },
    {
        path: "/*",
        element: <h2>404 Not Found</h2>,
    },
]);

export default router;