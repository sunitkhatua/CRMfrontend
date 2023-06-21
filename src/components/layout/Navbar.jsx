import React from "react";
import './navBar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <div>
          <Link className="navbar-brand" to="/">
            Customer Relation Management(CRM)
          </Link>
          
          <Link className="btn" to="/adduser">
            <buton className="adduser">Add User</buton>
          </Link>
        </div>
      </nav>
    </div>
  );
}