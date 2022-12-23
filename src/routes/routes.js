import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Addresses from "../Pages/Address/Addresses";
import Histories from "../Pages/History/Histories";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/address',
                element: <Addresses />
            },
            {
                path: '/history',
                element: <Histories />
            }
        ]
    }
])

export default router;