import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async rollNumber => {
    await axios.delete(`http://localhost:3000/users/${rollNumber}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">RollNumber</th>
              <th scope="col"> first Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col"> address</th>
              <th scope="col">Subject</th>
              <th scope="col">gender</th>
              <th scope="col">photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.subject}</td>
                <td>{user.gender}</td>
                <td>{user.photo}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.rollNumber}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.rollNumber}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.rollNumber)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
