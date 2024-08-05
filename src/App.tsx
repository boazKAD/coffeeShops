import React from 'react'
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRouter";
function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;