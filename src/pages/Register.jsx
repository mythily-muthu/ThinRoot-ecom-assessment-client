import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  let initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  let registerSchema = Yup.object().shape({
    username: Yup.string()
      .required("Please Enter UserName")
      .min(6, "Username length should be more than 5"),
    email: Yup.string()
      .email("*should be valid email")
      .required("*Please enter email!"),

    password: Yup.string()
      .min(4, "*Password should contain more than 3 characters.")
      .max(9, "*Password shouldn't exceed 9 characters.")
      .required("*Please enter Password!"),
  });

  const handleSubmit = async (values) => {
    console.log("values", values);
    let registerValues = { ...values };
    delete registerValues.confirmpassword;
    console.log("registerValues", registerValues);
    let apiUrl = "https://mythu-ecommerce-app.onrender.com/auth/register";
    let res = await axios.post(apiUrl, registerValues);
  };

  return (
    <div
      className="flex w-full min-h-screen bg-cover justify-center items-center "
      style={{
        backgroundImage: `url('https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/media/images/gettyimages-938255234/10018515-1-eng-GB/GettyImages-938255234.jpg')`,
      }}
    >
      <div
        className="flex flex-col h-auto w-auto justify-center items-center bg-white p-12 border border-primary
        bg-opacity-25"
      >
        <p className="font-bold text-primary">MAKE YOU UP</p>
        <p className="font-medium py-3">Register</p>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched }) => {
            return (
              <Form>
                <div className="py-4 flex flex-col gap-y-3  ">
                  <label htmlFor="email" className="font-medium text-primary">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="name"
                    className=" border border-black px-2 flex flex-col py-1  "
                  />
                  <ErrorMessage name="name" />
                </div>

                <div className="py-4 flex flex-col gap-y-3 ">
                  <label
                    htmlFor="Password"
                    className="font-medium text-primary"
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className="border border-black px-2 flex flex-col py-1"
                  />
                  {errors.email && touched.email && <div>{errors.email}</div>}
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
                  <ErrorMessage name="password" />
                </div>
                <div className="py-4 flex flex-col gap-y-3 ">
                  <label
                    htmlFor="Password"
                    className="font-medium text-primary"
                  >
                    Confirm Password
                  </label>
                  <Field
                    name="confirmpassword"
                    type="confirmpassword"
                    placeholder="Confirm Password"
                    className="border border-black px-2 flex flex-col py-1"
                  />
                </div>

                <button
                  className="flex justify-center items-center bg-primary text-white px-4 py-1  rounded-md"
                  type="submit"
                >
                  REGISTER
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
