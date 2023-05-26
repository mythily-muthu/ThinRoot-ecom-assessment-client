import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../axiosMethod";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
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
      .min(5, "*Password should contain more than 4 characters.")
      .max(40, "*Password shouldn't exceed 40 characters.")
      .required("*Please enter Password!"),
  });

  const handleSubmit = async (values) => {
    try {
      let res = await publicRequest.post("/auth/login", values);
      // setUserDetails(res.data.userDetails);
      if (res.status === 200) {
        dispatch(loginSuccess(res.data.userDetails));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));

      console.log("Error in login", error.message);
    }
  };

  return (
    <div
      className="flex w-full min-h-screen bg-cover justify-center items-center "
      style={{
        backgroundImage: `url('https://www.cosmeticsdesign-europe.com/var/wrbm_gb_food_pharma/storage/images/media/images/gettyimages-938255234/10018515-1-eng-GB/GettyImages-938255234.jpg')`,
      }}
    >
      <div
        className="flex flex-col p-6  w-[400px] justify-center items-center bg-white  border border-primary
        bg-opacity-25"
      >
        <p className="font-bold text-primary tracking-[0.2em]">MAKE YOU UP</p>
        <p className="font-light py-3 tracking-[0.2em]">Sign In</p>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => {
            return (
              <Form>
                <div className="py-4 flex flex-col gap-y-3  ">
                  <label
                    htmlFor="email"
                    className="font-light text-primary tracking-[0.2em]"
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className=" border border-black px-2 flex flex-col py-1  "
                    values={values.email}
                  />
                  <ErrorMessage name="email" />
                </div>

                <div className="py-4 flex flex-col gap-y-3 ">
                  <label
                    htmlFor="Password"
                    className="font-light text-primary tracking-[0.2em]"
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
                <div>
                  <p
                    className="flex text-primary text-sm justify-start py-2 tracking-[0.2em] cursor-pointer"
                    onClick={() => navigate("/register")}
                  >
                    Dont have an account?
                  </p>
                  <div className="flex justify-center py-5">
                    <button
                      className="flex justify-center items-center bg-primary text-white px-4 py-1 tracking-[0.2em] rounded-md"
                      type="submit"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-2">
                  <p className="text-primary underline text-center">
                    Test Credentials
                  </p>
                  <div className="flex flex-col w-full gap-y-2 items-center">
                    <p>email : test@gmail.com</p>
                    <p>password : test123</p>
                  </div>
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
