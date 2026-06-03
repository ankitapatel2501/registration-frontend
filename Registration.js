import { useState } from "react";
import axios from "axios";
import "./Registration.css";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const insert_data = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("https://my-backend.onrender.com/registration", {
        name,
        email,
        password,
      });

      alert("Registration Successful");

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Error while registering");
      console.log(error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2>Student Registration</h2>

        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={insert_data}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Registration;
