import React from "react";
import FadeOutAnimation from "../../../Animation/FadeOutAnimation";

const AllCategories = () => {
  return (
    <FadeOutAnimation>
      <div className="card">
        <div className="card-header py-3">
          <div className="row g-3">
            <div className="col-lg-3 col-md-6 me-auto">
              <div className="ms-auto position-relative">
                <div className="position-absolute top-50 translate-middle-y search-icon px-3">
                  <i className="bi bi-search" />
                </div>
                <input
                  className="form-control ps-5"
                  type="text"
                  placeholder="Search Payment"
                />
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Status</option>
                <option>Active</option>
                <option>Disabled</option>
                <option>Pending</option>
                <option>Show All</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Show 10</option>
                <option>Show 30</option>
                <option>Show 50</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className={"table-responsive"}>
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr className="text-center">
                  <th>#ID</th>
                  <th>Name</th>
                  <th>cover</th>
                  <th>name_folder</th>
                  <th>info</th>
                  <th>auther</th>
                  <th>Date add </th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>text</td>
                  <td>
                    <img
                      src={""}
                      className="rounded-circle"
                      width={44}
                      height={44}
                      alt="test"
                    />
                  </td>

                  <td>test</td>
                  <td>test</td>

                  <td>test</td>
                  <td>test</td>

                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-3 fs-6">
                      {/* show  */}
                      <button className="text-primary btn">
                        <i className="bi bi-eye-fill" />
                      </button>

                      {/* update */}
                      <button className="text-warning btn">
                        <i className="bi bi-pencil-fill" />
                      </button>

                      {/* deleted */}
                      <button variant="primary" className="text-danger btn">
                        <i className="bi bi-trash-fill" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav className={"float-end mt-3"}>
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </FadeOutAnimation>
  );
};

export default AllCategories;
