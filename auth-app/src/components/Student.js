import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
const Student = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    userService.getStudentContent().then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Student;
