import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentContent } from "../redux/action/Action";

const Student = () => {
  const result = useSelector((state) => state.data.state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentContent());
  }, []);
  return (
    <div>
      {" "}
      <h1>{result}</h1>
    </div>
  );
};

export default Student;
