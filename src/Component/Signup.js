import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Post data to backend
    axios.post('http://localhost:3001/Users', {
        "email": email,
        "password": password,
        "confirmPassword":confirmPassword
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSignup}> 
              <br />
              <h2>Register</h2>
              <div className="inputbox">
                <ion-icon name="mail" />
                <input 
                  type="email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock" />
                <input 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <label htmlFor="">New Password</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock" />
                <input 
                  type="password" 
                  required 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <label htmlFor="">Confirm Password</label>
              </div>
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember Me
                  <a href="#">Forget Password</a>
                </label>
              </div>
              <button className="button-77" role="button" type='submit'>
                Register</button>
              <div className="register">
                <p>
                  Already have an account
                  <Link to='/login'>Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;



