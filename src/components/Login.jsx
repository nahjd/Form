import React from 'react';
import { Link, Outlet } from "react-router-dom";
import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import playmarket from "../assets/images/playmarket.png"
import appstore from "../assets/images/appstore.png"
import logo from "../assets/images/logo.png"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from "formik"

const initialValues = {
  firstname: "",
  lastname: "",
  password: "",
  email: "",
  phone: 0,
  confirmpassword: ""

}

const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "firstname is required";
  }
  else if (values.firstname.length < 3) {
    errors.firstname = "Firstname must be at least 3 characters"
  }

  else if (values.firstname > 10) {
    errors.firstname = "Error"
  }
  else if (!/^[a-zA-Z]+$/.test(values.firstname)) {
    errors.firstname = "Firstname only contain letters"
  }

  if (!values.lastname) {
    errors.lastname = "lastname is required";
  }
  else if (values.lastname.length < 3) {
    errors.lastname = "Lastname must be at least 3 characters"
  }
  else if (values.lastname > 10) {
    errors.firstname = "Lastname must be at least 10 characters"
  }
  else if (!/^[a-zA-Z]+$/.test(values.lastname)) {
    errors.lastname = "Lastname only contain letters"
  }

  if (!values.phone) {
    errors.phone = "phone is required"
  }
  else if (values.phone < 6) {
    errors.phone = "phone must be at least 6 characters"
  }
  else if (!/^(051|055|070)\d{7}$/.test(values.phone)) {
    errors.phone = "invalid phone number"
  }


  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }




  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }




  if (!values.confirmpassword) {
    errors.confirmpassword = 'confirmpassword is required';
  } else if (values.confirmpassword.length < 6) {
    errors.confirmpassword = 'confirmpassword must be at least 6 characters';
  }

  return errors;
};

// export const YourFormComponent = () => {
//   // const handleSubmit = (values, { setSubmitting }) => {

//   //   console.log(values);
//   //   setSubmitting(false);
//   // };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="email" id="email" name="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             <Field type="password" id="password" name="password" />
//             <ErrorMessage name="password" component="div" />
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

const Login = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },

  });

  return (
    <>
      <section>
        <div className="main">
          <div className="Cards">
            <div className="leftCard">
              <p>Social media shared today, tomorrow <br /> or by location</p>
              <div className="image">
                <img src={img1} alt="logo" />
              </div>

            </div>
            <div className="rightCard">
              <div className="header">
                <div className="capzul">
                  <img src={logo} alt="Logo" />
                  <h3>Capzul</h3>
                </div>
                <div className="Createaccount">
                  <h1>Create account</h1>
                  <br />
                  <span>For business, band or celebrity.</span>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit(e);
                  }} >
                  <div className="inputs">
                    <div className="oneinput">
                      <label htmlFor=""
                        id='label1'
                      >First name</label>

                      <input type="text"
                        name='firstname'
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        id='input1' />

                      {formik.errors.firstname ? (
                        <div style={{ color: "red" }}>{formik.errors.firstname}</div>
                      ) : null}

                      <label htmlFor=""
                        id='label2'
                      >Last name</label>
                      <input type="text"
                        name='lastname'
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        id='input2' />
                      {formik.errors.lastname ? (
                        <div style={{ color: "red" }}>{formik.errors.lastname}</div>
                      ) : null}
                    </div>

                    <div className="twoinput">
                      <label htmlFor=""
                        id='label3'>Email or phone number </label>
                      <input type="email"
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        id='input3' />
                      {formik.errors.email ? (
                        <div style={{ color: "red" }}>{formik.errors.email}</div>
                      ) : null}
                      <label htmlFor=""
                        id='label4'>Phone </label>
                      <input type="text"
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        id='input4' />
                      {formik.errors.phone ? (
                        <div style={{ color: "red" }}>{formik.errors.phone}</div>
                      ) : null}

                    </div>
                    <div className="threeinput">
                      <label htmlFor=""
                        id='label5'>Password</label>
                      <input type="password"
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        id='input5' />
                      {formik.errors.password ? (
                        <div style={{ color: "red" }}>{formik.errors.password}</div>
                      ) : null}

                      <label htmlFor=""
                        id='label6'>Confirm password</label>
                      <input type="password"
                        name='confirmpassword'
                        value={formik.values.confirmpassword}
                        onChange={formik.handleChange}
                        id='input6' />
                      {formik.errors.confirmpassword ? (
                        <div style={{ color: "red" }}>{formik.errors.confirmpassword}</div>
                      ) : null}
                    </div>
                  </div>


                  <div className="footer">
                    <div className="remember">
                      <div className="check">
                        <div className="inputt">
                          <input type="checkbox" id="vehicle1" name="vehicle1" />

                          <label htmlFor=""
                          >Remember me</label><br />
                        </div>

                        <input type="checkbox" name="checkbox"
                          value={formik.values.checkbox}
                          onChange={formik.handleChange}

                        />
                        <label htmlFor=""
                          id='check'
                          type="checkbox" name="checkbox"
                          value={formik.values.checkbox}
                          onChange={formik.handleChange}
                        >I agree to all the <a >Terms</a> and <a >Privacy </a>policy</label><br />

                      </div>
                      <div className="forgot">
                        <Link to='/ForgotPassword'>Forgot password?</Link>
                      </div>

                    </div>

                    <div className="buttons">
                      <div className="leftbtn">
                        <Link
                          to="/Home"
                          style={{ color: "white", paddingTop: "15px" }}
                        >Create account</Link>
                      </div>
                      <div className="rightbtn">
                        <div className="imagebutton">

                          <img src={img2} alt="img2" />
                          <p>Sign-in with google</p>
                          <span>Don’t have an account? <a >Log In</a> </span>

                        </div>

                      </div>

                    </div>

                  </div>
                </form>
              </div>
              <div className="endbutton">
                <img src={playmarket} alt="playmarket" />
                <img src={appstore} alt="appstore" />
              </div>
            </div>

          </div>
          <Outlet />
        </div>

      </section>
    </>
  )
}

export default Login;