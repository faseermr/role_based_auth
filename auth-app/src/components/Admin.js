import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
const Admin = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    userService.getAdminContent().then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Admin;
