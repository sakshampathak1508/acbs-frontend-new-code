import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Homepage from "../pages/HomePage";
import Error from "../pages/Error";

function AllRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Homepage/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoute;
