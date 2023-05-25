import React from "react";

const Login = () => {
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
