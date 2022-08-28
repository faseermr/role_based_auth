import React, { useEffect, useState } from "react";
import userService from "../services/user.service";
const Student = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    userService.getStudentContent().then((res) => {
      setData(res.data);
    });
  }, []);
  return <div>{data}</div>;
};

export default Student;
