import { createBrowserRouter } from "react-router-dom";
import App from "../App";
//import Home from "../pages/Home";

//import Login from "../pages/Login";
//import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children : []
    }
]);

export default router;