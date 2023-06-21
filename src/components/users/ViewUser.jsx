import axios from "axios";
import './viewUser.css'
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    id:"",
    name: "",
    email: "",
    phone:"",
    address:"",
    communication_history: "",
    purchase_history: "",
  });

  const {id} = useParams();

  useEffect(() => {
    loadUser();
  },);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container3">
      <div className="row">
        <div>
          <h2 className="text-center m-4">User Details</h2>

          <div className="viewcard">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="details">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="details">
                  <b>Email: </b>
                  {user.email}
                </li>
                <li className="details">
                  <b>Phone: </b>
                  {user.phone}
                </li>
                <li className="details">
                  <b>Address: </b>
                  {user.address}
                </li>
                <li className="details">
                  <b>Communication History: </b>
                  {user.communication_history	}
                </li>
                <li className="details">
                  <b>Purchase History: </b>
                  {user.purchase_history}
                </li>
              </ul>
            </div>
          </div>
          <button  className="btnBack" >
          <Link className="Back" to={"/"}>
            Back to Home
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
}