import React, { useState } from "react";
import authService from "../services/auth.service";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    roles: "",
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      roles: "",
    },
    validationSchema: yup.object({
      username: yup.string().strict().required("required"),
      password: yup.string().strict().required("required"),
      email: yup.string().email("invalid email").required("required"),
      roles: yup.string().strict().required("required"),
    }),
    onSubmit: (data) => {
      // data.preventDefault();
      //  console.log(data);
      authService
        .register(data.username, data.email, data.password, data.roles)
        .then((res) => {
          //console.log(res);
          alert(res.data.message);
          Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
          );
          Array.from(document.querySelectorAll("select")).forEach(
            (select) => (select.value = "")
          );
          data.username = "";
          data.email = "";
          data.password = "";
          data.roles = "";
          //setData({ username: "", email: "", password: "", roles: "" });
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  });

  // const userRegister = async (e) => {
  //   e.preventDefault();
  //   console.log(data);
  //   authService
  //     .register(data.username, data.email, data.password, data.roles)
  //     .then((res) => {
  //       alert(res.data.message);
  //       setData({ username: "", email: "", password: "", roles: "" });
  //     });
  // };

  // const onchange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <div
      className="card w-50 mx-auto mt-4"
      style={{
        borderBottom: "3px solid rgb(10, 155, 5)",
        borderRight: "3px solid rgb(10, 155, 5)",
        borderLeft: "3px solid rgb(10, 155, 5)",
      }}
    >
      <div className="card-header bg-success text-center">
        {" "}
        <h4> Registration</h4>
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
                aria-label="username-test"
                name="username"
                // value={data.username}
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
              <label>Email</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="col form-control"
                aria-label="email-test"
                name="email"
                // value={data.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mx-4 mt-4">
            <div className="col-3">
              <label>Role</label>
            </div>
            <div className="col-9">
              <select
                className="form-select"
                // value={data.roles}
                onChange={formik.handleChange}
                name="roles"
              >
                <option>-- Select One --</option>
                <option>Admin</option>
                <option>Student</option>
                <option>Teacher</option>
              </select>
              {formik.errors.roles ? (
                <div className="text-danger">{formik.errors.roles}</div>
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
                aria-label="password-test"
                name="password"
                // value={data.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            type="submit"
            aria-label="submit-test"
            className="btn btn-primary mt-4 mx-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
