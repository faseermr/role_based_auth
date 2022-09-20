import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminContent } from "../redux/action/Action";

const Admin = () => {
  const result = useSelector((state) => state.data.state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdminContent());
  }, []);
  return (
    <div>
      {" "}
      <h1>{result}</h1>
    </div>
  );
};

export default Admin;
