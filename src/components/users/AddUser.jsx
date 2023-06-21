import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './addUser.css'

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    id:"",
    name: "",
    email: "",
    phone:"",
    address:"",
    communication_history: "",
    purchase_history: "",
  });

  const { name, email, phone, address, communication_history, purchase_history } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add a Customer</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="communication_history" className="form-label">
              Communication History
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Communication History"
                name="communication_history"
                value={communication_history}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="purchase_history" className="form-label">
              Purchase History
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="DD/MM/YYYY"
                name="purchase_history"
                value={purchase_history}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="button">
            <button type="submit" className="btn1">
              Submit
            </button>
            <Link className=" btn2" to="/">
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}