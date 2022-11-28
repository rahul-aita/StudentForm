import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    subject: "",
    gender:"",
    photo:""
  });
  const { rollNumber } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/users/${rollNumber}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User RollNumber: {rollNumber}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.lastname}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">address: {user.address}</li>
        <li className="list-group-item">subject: {user.subject}</li>
        <li className="list-group-item">website: {user.gender}</li>
        <li className="list-group-item">website: {user.photo}</li>

      </ul>
    </div>
  );
};

export default User;
