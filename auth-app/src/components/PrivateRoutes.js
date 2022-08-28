import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../services/auth.service";

const PrivateRoutes = () => {
  const currentUser = authService.getCurrentUser();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
