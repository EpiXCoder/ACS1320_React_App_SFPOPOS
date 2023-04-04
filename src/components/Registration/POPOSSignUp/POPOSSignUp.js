import React, { useState } from "react";
import './POPOSSignUp.css'

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up Form</h2>
      <label htmlFor="username-input">
        Username:
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="password-input">
        Password:
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="firstName-input">
        First Name:
        <input
          id="firstName-input"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="lastName-input">
        Last Name:
        <input
          id="lastName-input"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="email-input">
        Email:
        <input
          id="email-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button className="signup-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
