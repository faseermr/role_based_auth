import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentContent } from "../redux/action/Action";

const Student = () => {
  const result = useSelector((state) => state.data.state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentContent());
  }, []);
  return <div>{result}</div>;
};

export default Student;
