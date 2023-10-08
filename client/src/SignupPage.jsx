import  { useState } from 'react';
import './App.css'
import axios from 'axios'

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    // Handle signup logic here
    // console.log('Signup clicked');
    e.preventDefault();
    axios.post('http://localhost:3001/signup',{name,email,password})
    .then(result=> console.log(result))
    .catch(err => console.log(err))


  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} >
        <div className="input-container">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      <div className="login-option">
        <p>Already have an account?</p>
        <button type="button" >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
