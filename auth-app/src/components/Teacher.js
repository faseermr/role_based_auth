import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
const Teacher = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    userService.getTeacherContent().then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Teacher;
