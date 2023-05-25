import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState("");
  let navigate = useNavigate();
  let initialValues = {
    email: "",
    password: "",
  };
  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("*should be valid email")
      .required("*Please enter email!"),

    password: Yup.string()
      .min(4, "*Password should contain more than 3 characters.")
      .max(9, "*Password shouldn't exceed 9 characters.")
      .required("*Please enter Password!"),
  });

  const handleSubmit = async (values) => {
    console.log("formik", values);
    let apiUrl = "https://mythu-ecommerce-app.onrender.com/auth/login";
    let res = await axios.post(apiUrl, values);
    console.log(res.data);
    setData(res.data);
    navigate("/");
  };

  return (
    <div
      className="flex w-full min-h-screen bg-cover justify-center items-center "
      style={{
        backgroundImage: `url('https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/media/images/gettyimages-938255234/10018515-1-eng-GB/GettyImages-938255234.jpg')`,
      }}
    >
      <div
        className="flex flex-col h-96 w-96 justify-center items-center bg-white p-8 border border-primary
        bg-opacity-25"
      >
        <p className="font-bold text-primary">MAKE YOU UP</p>
        <p className="font-medium py-3">Sign In</p>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => {
            return (
              <Form>
                <div className="py-4 flex flex-col gap-y-3  ">
                  <label htmlFor="email" className="font-medium text-primary">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className=" border border-black px-2 flex flex-col py-1  "
                  />
                </div>

                <div className="py-4 flex flex-col gap-y-3 ">
                  <label
                    htmlFor="Password"
                    className="font-medium text-primary"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border border-black px-2 flex flex-col py-1"
                  />
                </div>
                <div>
                  <p className="flex text-primary justify-end py-2">
                    forget password?
                  </p>
                  <button
                    className="flex justify-center items-center bg-primary text-white px-4 py-1  rounded-md"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
