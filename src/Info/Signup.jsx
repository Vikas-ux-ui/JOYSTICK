import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../features/accountSlice.js";
import { setUserGameCart } from "../features/gameSlice.js";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let counter = Number(localStorage.getItem("counter") || 1);

  const signupSchema = yup.object({
    name: yup.string()
      .required("Name is required")
      .max(10, "Maximum 10 characters"),
    email: yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(10, "Password too long")
      .required("Password is required"),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { name: "", email: "", password: "" },
      validationSchema: signupSchema,
     onSubmit: (values) => {
  const user = {
    Name: values.name,
    email: values.email,
    password: values.password,
    cart: [],
  };

  for (let i = 0; i < counter; i++) {
    const data = JSON.parse(localStorage.getItem(`user${i}`));
    if (data && data.email === values.email) {
      alert("User already exists");
      return;  
    }
  }

  localStorage.setItem(`user${counter}`, JSON.stringify(user));
  localStorage.setItem("counter", counter + 1);

 
  dispatch(setLogin({ Name: user.Name }));
  alert("Account created successfully!");
  navigate("/"); 
}

    });

  const handleSignIn = () => {
    let usersCart = [];
    let foundUser = false;

    for (let i = 1; i <= counter; i++) {
      const data = JSON.parse(localStorage.getItem(`user${i}`));

      if (data && data.email === values.email) {
        foundUser = true;
        if (data.password === values.password) {
          alert(`Welcome back, ${data.Name}!`);
          dispatch(setLogin({ Name: data.Name }));
          usersCart = data.cart || [];
        } else {
          alert("Incorrect password!");
          return;
        }
        break;
      }
    }

    if (!foundUser) {
      alert("User not found. Please sign up first.");
      return;
    }

   
    usersCart.forEach((game) => dispatch(setUserGameCart(game)));
    navigate("/"); 
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-black">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-dark rounded shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-white text-center mb-4">Signup / Sign In</h2>

        {/* Name */}
        <label htmlFor="name" className="form-label text-white fw-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-2"
        />
        {errors.name && touched.name && (
          <small className="text-danger">{errors.name}</small>
        )}

        {/* Email */}
        <label htmlFor="email" className="form-label text-white fw-bold mt-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-2"
        />
        {errors.email && touched.email && (
          <small className="text-danger">{errors.email}</small>
        )}

        {/* Password */}
        <label htmlFor="password" className="form-label text-white fw-bold mt-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-2"
        />
        {errors.password && touched.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        {/* Buttons */}
        <button type="submit" className="btn btn-primary w-100 mt-3">
          Create Account
        </button>
        <button
          type="button"
          onClick={handleSignIn}
          className="btn btn-secondary w-100 mt-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signup;
