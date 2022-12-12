import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home";
import Eduzone from "../Pages/Home/MyProjects/Eduzone";
import ResellerCar from "../Pages/Home/MyProjects/ResellerCar";
import Texiservice from "../Pages/Home/MyProjects/Texiservice";
import Main from "../Pages/LayOut/Main";
import NotFound from "../Pages/NotFound/NotFound";

 
export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <NotFound></NotFound>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/resellercar',
                element: <ResellerCar></ResellerCar>
            },
            {
                path:'/eduzone',
                element: <Eduzone></Eduzone>
            },
            {
                path:'/texiservice',
                element: <Texiservice></Texiservice>
            },
        ]
        
    }
])