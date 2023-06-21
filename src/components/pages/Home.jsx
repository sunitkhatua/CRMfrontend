import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './home.css';
import eye from '../../assets/eye.png';
import edit from '../../assets/icons8-edit-48.png';
import deleteImage from '../../assets/icons8-bucket-60.png';
export default function Home() {
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="homeuser">
      <div className="py-4">
        <table className="">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Customer-ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">communication_history</th>
              <th scope="col">purchase_history</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="table">
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.communication_history}</td>
                <td>{user.purchase_history}</td>
                <td className="ved">
                  <Link
                    className="view"
                    to={`/viewuser/${user.id}`}
                  >
                    <img className="viewImage" src={eye} alt="view"/>
                  </Link>
                  <Link
                    className="edit"
                    to={`/edituser/${user.id}`}
                  >
                    <img className="edituser" src={edit} alt="edit"/>
                  </Link>
                  <Link
                    className="delete"
                    onClick={() => deleteUser(user.id)}
                  >
                    <img className="deleteUser" src={deleteImage} alt="delete"/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}