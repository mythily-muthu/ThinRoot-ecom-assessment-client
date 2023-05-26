import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  // initial values
  let initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  // register schema
  let registerSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please Enter UserName")
      .min(3, "Username length should be more than 2"),
    email: Yup.string()
      .email("*should be valid email")
      .required("*Please enter email!"),

    password: Yup.string()
      .min(5, "*Password should contain more than 4 characters.")
      .max(40, "*Password shouldn't exceed 40 characters.")
      .required("*Please enter Password!"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    let registerValues = { ...values };
    delete registerValues.confirmpassword;
    let baseUrl = "http://localhost:8000/api/";
    let res = await axios.post(`${baseUrl}auth/register`, registerValues);
    resetForm();
    alert("User created successfully");
    navigate("/login");
  };

  return (
    <div
      className="flex w-full min-h-screen bg-cover justify-center items-center "
      style={{
        backgroundImage: `url('https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/media/images/gettyimages-938255234/10018515-1-eng-GB/GettyImages-938255234.jpg')`,
      }}
    >
      <div
        className="flex flex-col h-auto w-[500px] justify-center items-center bg-white p-12 border border-yellow
        bg-opacity-25"
      >
        <p className="font-bold text-xl text-primary tracking-[0.2em]">
          MAKE YOU UP
        </p>
        <p className="font-light py-3 uppercase tracking-[0.2em]">Register</p>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => {
            return (
              <Form className="flex flex-col gap-y-1 w-full">
                {/* name */}
                <div className="py-4 flex flex-col gap-y-2  ">
                  <label
                    htmlFor="name"
                    className="font-light tracking-[0.2em] text-primary"
                  >
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="name"
                    className=" border border-black px-2 flex flex-col py-1  "
                    values={values.email}
                  />
                  <ErrorMessage name="name" />
                </div>
                {/* email */}
                <div className="py-4 flex flex-col gap-y-2 ">
                  <label
                    htmlFor="Password"
                    className="font-light tracking-[0.2em] text-primary"
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className="border border-black px-2 flex flex-col py-1"
                    values={values.email}
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}
                </div>
                {/* password */}
                <div className="py-4 flex flex-col gap-y-2 ">
                  <label
                    htmlFor="Password"
                    className="font-light tracking-[0.2em] text-primary"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border border-black px-2 flex flex-col py-1"
                    values={values.password}
                  />
                  <ErrorMessage name="password" />
                </div>
                {/* confirm password */}
                <div className="py-4 flex flex-col gap-y-2 ">
                  <label
                    htmlFor="Password"
                    className="font-light tracking-[0.2em] text-primary"
                  >
                    Confirm Password
                  </label>
                  <Field
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-black px-2 flex flex-col py-1"
                  />
                </div>
                <div className="flex justify-center py-4">
                  <button
                    className="flex justify-center items-center bg-primary text-white px-4 py-1 font-medium rounded-md tracking-[0.2em]"
                    type="submit"
                  >
                    REGISTER
                  </button>
                </div>
                <p
                  className="flex w-full font-normal text-sm cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Registered already? click here to LOGIN
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
