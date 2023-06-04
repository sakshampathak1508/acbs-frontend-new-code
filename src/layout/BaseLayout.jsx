import React from "react";
import { Outlet } from "react-router-dom";

import * as Styled from "./BaseLayout.styles";
import Header from "../component/header/header";
import ScrollToTop from "../helper/ScrollToTop";

const BaseLayout = () => (
  <>
    <Header />
    <Styled.MainContent className="main-content">
      <ScrollToTop />
      <Outlet />
    </Styled.MainContent>
  </>
);

export default BaseLayout;
