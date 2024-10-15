import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/user/homePage/HomePage.js";
import { ROUTERS } from "./utils/router.js";
import MasterLayout from './pages/user/theme/MasterLayout.js';

const renderUserRouter = function() {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                 userRouters.map((item, key) => ( <Route key={key} path={item.path} element={item.component} /> ))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = function() {
    return renderUserRouter();
}

export default RouterCustom;