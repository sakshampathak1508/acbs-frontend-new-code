import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Homepage from "../pages/HomePage";
import Error from "../pages/Error";
import AllNews from "../pages/News/AllNews";
import ParticularNews from "../pages/News/ParticularNews";
import Event from '../pages/Event/Event'

function AllRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Homepage/>} />
                <Route path="/news" exact element={<AllNews/>} />
                <Route path="/news/:id" exact element={<ParticularNews/>} />
                <Route path="/event" exact element={<Event/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoute;
