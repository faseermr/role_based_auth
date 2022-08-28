import React from "react";
import authService from "../services/auth.service";
const Dashboard = () => {
  const currentUser = authService.getCurrentUser();
  //console.log(currentUser.accessToken);
  return (
    <div>
      <div className="container">
        <div className="card p-2 w-50  mx-auto">
          <header className="jumbotron">
            <h3>
              <strong>Welcome {currentUser.username}</strong>
            </h3>
          </header>

          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <p>
            <strong>Role: </strong>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <span key={index}>{role}</span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
