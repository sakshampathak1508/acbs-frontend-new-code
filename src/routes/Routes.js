import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Homepage from "../pages/HomePage";
import Error from "../pages/Error";
import AllNews from "../pages/News/AllNews";
import ParticularNews from "../pages/News/ParticularNews";
import ParticularEvent from "../pages/Event/ParticularEvent";
import Event from '../pages/Event/Event'
import Executive from "../pages/Executive/Executive";
import Members from "../pages/Member/Members"

function AllRoute() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Homepage/>} />
                <Route path="/news" exact element={<AllNews/>} />
                <Route path="/news/:id" exact element={<ParticularNews/>} />
                <Route path="/event" exact element={<Event/>} />
                <Route path="/event/:id" exact element={<ParticularEvent/>} />
                <Route path="/executives" exact element={<Executive/>} />
                <Route path="/members" exact element={<Members/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AllRoute;
