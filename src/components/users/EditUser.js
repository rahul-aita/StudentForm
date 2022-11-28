import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { rollNumber } = useParams();
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    subject: "",
    gender:"",
    photo:""
  });

  const { name, lastname, email, address, subject,gender,photo } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${rollNumber}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${rollNumber}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your lastname"
              name="lastname"
              value={lastname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your address Number"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="cars">Choose a subject:</label>
  <select name="subject" id="subject"   type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your subject Name"
            
              value={subject}
              onChange={e => onInputChange(e)}>
               <option select="select">select</option>
    <option value="math">math</option>
    <option value="pysics">pysics</option>
    <option value="chemistry">chemistry</option>
    <option value="English">English</option>
  </select>
          </div>
          <div className="form-group">
            <label for="gender">Choose a gender:</label>
  <select name="gender" id="gender"   type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your gender "
            
              value={gender}
              onChange={e => onInputChange(e)}>
                <option select="select">select</option>
    <option value="male">male</option>
    <option value="female">female</option>
    
  </select>
          </div>
          <div className="form-group">
            
            <input
              type="file" id="myFile"
              className="form-control form-control-lg"
              placeholder="Enter Your photo"
              name="photo"
              value={photo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
