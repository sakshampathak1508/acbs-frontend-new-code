import "./App.css";
import { React } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";

import router from "./routes/Routes";
import { StateProvider } from "./StateProvider";

const App = () => {
  return (
    <StateProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StateProvider>
  );
};

export default App;
