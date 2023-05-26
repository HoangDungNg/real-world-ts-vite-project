import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterLayout } from "../Router";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RouterLayout />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
