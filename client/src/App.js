// App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5036", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameData,
          email: emailData,
          password: passwordData,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        return;
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        style={{
          marginLeft: "500px",
          marginTop: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <label>Name:</label>
        <input
          value={nameData}
          onChange={(e) => setNameData(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          value={emailData}
          onChange={(e) => setEmailData(e.target.value)}
          type="email"
          placeholder="Enter your email"
        />

        <label>Password:</label>
        <input
          value={passwordData}
          onChange={(e) => setPasswordData(e.target.value)}
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">Continue</button>
      </form>
    </>
  );
}

export default App;