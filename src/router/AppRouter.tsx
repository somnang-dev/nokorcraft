import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../pages/Layout.tsx";

import Configuation from "../utils/Configuation.ts";

import Discord from "../pages/Discord.tsx";
import Maintenance from "../pages/Maintenance.tsx";

const AppRouter = () => {
    new Configuation()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Maintenance/>}/>
                    <Route path='/discord' element={<Discord/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter