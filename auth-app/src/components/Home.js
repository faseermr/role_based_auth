import React, { useEffect, useState } from "react";
import userService from "../services/user.service";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    userService.getPublicContent().then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Home;
