import React from "react";
import ScaleInAnimation from "../../Animation/ScaleInAnimation";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  
  const handelLogin = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <ScaleInAnimation>
      <div className="content-auth ">
        <div className="">
          <div className="rounded-0 overflow-hidden">
           
              <div className=" card col-lg-5 offset-lg-4">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-3 h2">LogIn</h5>
                  <form onSubmit={handelLogin} className="form-body">
                    <div className="row g-3">
                      <div className="col-12">
                        <label
                          htmlFor="inputEmailAddress"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-envelope-fill" />
                          </div>
                          <input
                            type="email"
                            className="form-control radius-30 ps-5"
                            id="inputEmailAddress"
                            placeholder="Email Address"
                           
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="inputChoosePassword"
                          className="form-label"
                        >
                          Enter Password
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-lock-fill" />
                          </div>
                          <input
                            type="password"
                            className="form-control radius-30 ps-5"
                            id="inputChoosePassword"
                            placeholder="Enter Password"
                           
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        {" "}
                        <a href="authentication-forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">                         
                                <button
                                  type="submit"
                                  className="btn btn-primary radius-30"
                                >
                                  Login
                                </button>      
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="mb-0">
                          Don't have an account yet?
                          <a href="authentication-signup.html">Sign up here</a>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
      
          </div>
        </div>
      </div>
    </ScaleInAnimation>
  );
};

export default Login;
