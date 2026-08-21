import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Component/Pages/Home";
import CategoryNews from "../Component/Pages/categorynews";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Component/Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Component/Loading";
import About from "../Component/Pages/About";
import Career from "../Component/Pages/Career";

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
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path:"/about",
                element: <About></About>,
            },
            {
                path:"/career",
                element: <Career></Career>,
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
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "/*",
        element: <h2>404 Not Found</h2>,
    },
]);

export default router;