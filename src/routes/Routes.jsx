import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import AboutAcbs from "../pages/About/About";
import Category from "../pages/Category/Category";
import Contact from "../pages/Contact/Contact";
import Documents from "../pages/Documents/Documents";
import Error from "../pages/Error";
import Event from "../pages/Event/Event";
import ParticularEvent from "../pages/Event/ParticularEvent";
import Executive from "../pages/Executive/Executive";
import Homepage from "../pages/HomePage/HomePage";
import Members from "../pages/Member/Members";
import AllNews from "../pages/News/AllNews";
import ParticularNews from "../pages/News/ParticularNews";
import PastChampion from "../pages/PastChampions/PastChampion";
import PastParticularChampion from "../pages/PastChampions/PastParticularChampion";
import Rules from "../pages/Rules/Rules";
import Search from "../pages/Search/Search";

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
      <Route path="/past-champions" exact element={<PastChampion />} />
      <Route
        path="/past-champion/:id/:slug?"
        exact
        element={<PastParticularChampion />}
      />
      <Route path="/category/:category" exact element={<Category />} />
      <Route path="/contact-us" exact element={<Contact />} />
      <Route path="/about-us" exact element={<AboutAcbs />} />
      <Route path="/documents" exact element={<Documents />} />
      <Route path="/rules" exact element={<Rules />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default AllRoute;
