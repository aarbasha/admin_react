import React from "react";
import ScaleInAnimation from "../../Animation/ScaleInAnimation";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const SingUpSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <ScaleInAnimation>
      <div className="content-auth-singup ">
      
          <div className='rounded-0 overflow-hidden'>
            <div className="row g-0">
              <div className=" card col-lg-7 offset-lg-3">
                <div className="card-body p-4 p-sm-5">
           
                  <h5 className="card-title h3 text-center">Sign Up</h5>
                
                  <form onSubmit={SingUpSubmit} className="form-body">

                    <div className="row  g-4">
                      <div className="col-6 ">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-person-circle" />
                          </div>
                          <input
                            type="text"
                            className="form-control radius-30 ps-5"
                            id="name"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-person-circle" />
                          </div>
                          <input
                            type="text"
                            className="form-control radius-30 ps-5"
                            id="username"
                            placeholder="username"
                          />
                        </div>
                      </div>

                      <div className="col-6 ">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-envelope-fill" />
                          </div>
                          <input
                            type="email"
                            className="form-control radius-30 ps-5"
                            id="email"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>

                    

                      <div className="col-6">
                        <label htmlFor="password" className="form-label">
                          Enter Password
                        </label>
                        <div className="ms-auto position-relative">
                          <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                            <i className="bi bi-lock-fill" />
                          </div>
                          <input
                            type="password"
                            className="form-control radius-30 ps-5"
                            id="password"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>

                    

                      <div className="col-12">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            I Agree to the Trems &amp; Conditions
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid">               
                              <button
                                type="submit"
                                className="btn btn-primary radius-30"
                              >
                                Sign in
                              </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="mb-0">
                          Already have an account?
                          <a href="authentication-signin.html mx-2">Sign up here</a>
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

export default Singup;
