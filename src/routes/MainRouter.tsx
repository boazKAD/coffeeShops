import React from 'react'
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from '../pages/Dashboard';
import Menu from '../pages/Menu';


const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path='/menu' element={<Menu />}></Route>
    </Routes>
  );
};
export default MainRouter;
