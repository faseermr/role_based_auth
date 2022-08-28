import React from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth.service";

const Navbar = ({
  showAdminBoard,
  showTeacherBoard,
  showStudentBoard,
  currentUser,
}) => {
  const logOut = () => {
    authService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/dashboard" className="navbar-brand">
          Auth App
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>

          {showTeacherBoard && (
            <li className="nav-item">
              <Link to="/teacher" className="nav-link">
                Teacher
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin
              </Link>
            </li>
          )}

          {showStudentBoard && (
            <li className="nav-item">
              <Link to="/student" className="nav-link">
                Student
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto" style={{ background: "red" }}>
            <li className="nav-item ">
              <Link to="/dashboard" className="nav-link ">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link " onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
