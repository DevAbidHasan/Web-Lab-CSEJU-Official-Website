import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Privacy from "../components/Privacy";
import Developer from "../components/Developer";
import Error from "../components/Error";
import AllFaculty from "../components/AllFaculty";
import FacultyDetails from "../components/FacultyDetails";
import Login from "../pages/AuthPages/Login";
import Register from "../pages/AuthPages/Register";
import Profile from "../pages/AuthPages/Profile";
import PrivateRoute from "../provider/PrivateRoute";

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
            },
            {
                path : "all-faculty-members",
                Component : AllFaculty
            },
            {
                path : "faculty-details/:id",
                Component : FacultyDetails
            },
            {
                path : "login",
                Component : Login
            },
            {
                path : "register",
                Component : Register
            },
            {
                path :"user-profile",
                element : (
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                )
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