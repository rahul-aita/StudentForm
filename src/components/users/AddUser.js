import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    address: "",
    subject: "",
    gender:"",
    photo:""
  });

  const { name, lastname, email, address, subject,gender,photo} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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
          <button className="btn btn-secondary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
