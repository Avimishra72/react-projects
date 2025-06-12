// src/routes/Routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
import ChatRoom from "../ChatRoom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<ChatRoom />} />
    </Routes>
  );
};

export default AppRoutes;
