import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherContent } from "../redux/action/Action";

const Teacher = () => {
  const result = useSelector((state) => state.data.state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeacherContent());
  }, []);
  return <div>{result}</div>;
};

export default Teacher;
