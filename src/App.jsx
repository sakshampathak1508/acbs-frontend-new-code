import "./App.css";
import { React } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";

import router from "./routes/Routes";

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
