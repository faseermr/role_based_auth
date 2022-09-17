import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeContent } from "../redux/action/Action";

const Home = () => {
  const result = useSelector((state) => state.data.state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeContent());
  }, []);
  return <div>{result}</div>;
};

export default Home;
