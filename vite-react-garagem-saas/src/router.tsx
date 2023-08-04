import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import Default from "./layouts/Default";
import Guest from "./layouts/Guest";
import Dashboard from "./views/Dashboard";
import Pecas from "./views/Pecas";
import PecaForm from "./views/PecaForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/pecas",
                element: <Pecas />,
            },
            {
                path: "/pecas/create",
                element: <PecaForm key={"pecaCreate"} />,
            },
            {
                path: "/pecas/:id/edit",
                element: <PecaForm key={"pecaUpdate"} />,
            },
        ],
    },
    {
        path: "/",
        element: <Guest />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
