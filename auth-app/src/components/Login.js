import React, { useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().strict().required("required"),
      password: yup.string().strict().required("required"),
    }),
    onSubmit: (data) => {
      // e.preventDefault();
      console.log(data);
      authService.login(data.username, data.password).then((res) => {
        navigate("/dashboard");
        window.location.reload();
        //console.log(res);
      });
    },
  });

  // const userLogin = async (e) => {
  //   e.preventDefault();
  //   console.log(data);
  //   authService.login(data.username, data.password).then((res) => {
  //     navigate("/dashboard");
  //     window.location.reload();
  //     //console.log(res);
  //   });
  // };

  // const onchange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <div>
      <div className="container">
        <div
          className="card w-50 mx-auto mt-4"
          style={{
            borderBottom: "3px solid rgb(10, 155, 5)",
            borderRight: "3px solid rgb(10, 155, 5)",
            borderLeft: "3px solid rgb(10, 155, 5)",
          }}
        >
          <div
            className="card-header text-center bg-success"
            // style={{backgroundImage:" linear-gradient(to right, rgb(148, 29, 27),rgb(176, 129, 2))"}}
          >
            {" "}
            <h4>Log In</h4>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="row mx-4 mt-4">
                <div className="col-3">
                  <label>User Name</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    className="col form-control"
                    name="username"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.username ? (
                    <div className="text-danger">{formik.errors.username}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="row mx-4 mt-4">
                <div className="col-3">
                  <label>Password</label>
                </div>
                <div className="col-9">
                  <input
                    type="password"
                    className="col form-control"
                    name="password"
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4 mx-4">
                Login
              </button>
              {/* <span className="float-right mt-4">
                <a href="/forgot">Forgot Password?</a>
              </span> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
