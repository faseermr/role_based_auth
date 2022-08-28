import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import authService from "./services/auth.service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Admin from "./components/Admin";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  const [showTeacherBoard, setShowTeacherBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showStudentBoard, setShowStudentBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowStudentBoard(user.roles.includes("ROLE_STUDENT"));
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar
          showAdminBoard={showAdminBoard}
          showTeacherBoard={showTeacherBoard}
          showStudentBoard={showStudentBoard}
          currentUser={currentUser}
        />
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route path="/student" element={<Student />} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
