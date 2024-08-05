import React from 'react'
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from '../pages/Dashboard';


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
};
export default MainRouter;
