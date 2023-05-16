import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import Category from "../pages/Category/Category";
import Error from "../pages/Error";
import Event from "../pages/Event/Event";
import ParticularEvent from "../pages/Event/ParticularEvent";
import Executive from "../pages/Executive/Executive";
import Homepage from "../pages/HomePage";
import Members from "../pages/Member/Members";
import AllNews from "../pages/News/AllNews";
import ParticularNews from "../pages/News/ParticularNews";

const AllRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/news" element={<AllNews />} />
      <Route path="/news/:id/:slug?" element={<ParticularNews />} />
      <Route path="/event" exact element={<Event />} />
      <Route path="/event/:id/:slug?" exact element={<ParticularEvent />} />
      <Route path="/executives" exact element={<Executive />} />
      <Route path="/members" exact element={<Members />} />
      <Route path="/category" exact element={<Category />} title="skd" />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default AllRoute;
