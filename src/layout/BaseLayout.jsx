import React from "react";
import { Outlet } from "react-router-dom";

import * as Styled from "./BaseLayout.styles";
import Header from "../component/header/header";

const BaseLayout = () => (
  <>
    <Header />
    <Styled.MainContent>
      <Outlet />
    </Styled.MainContent>
  </>
);

export default BaseLayout;
