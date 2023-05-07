import "./App.css";
import { React } from "react";
import { RouterProvider } from "react-router";

import router from "./routes/Routes";
import { StateProvider } from "./StateProvider";

const App = () => {
  return (
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  );
};

export default App;
