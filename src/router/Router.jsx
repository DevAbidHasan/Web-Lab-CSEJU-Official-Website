import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Privacy from "../components/Privacy";
import Developer from "../components/Developer";
import Error from "../components/Error";

export const router = createBrowserRouter([
    {
        path : "",
        errorElement : <Error/>,
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : HomeLayout
            },
            {
                path :"about",
                element : <h2>this is about</h2>
            },
            {
                path : "contact",
                element :<h2>this is contact page</h2>
            }
        ]

    },
    {
        path :"privacy",
        Component : Privacy
    },
    {
        path :"developer-resources",
        Component : Developer
    }
])