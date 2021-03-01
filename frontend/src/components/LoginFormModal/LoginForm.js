import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import './LoginForm.css';
import RegisterFormModal from '../RegisterFormModal'

function LoginForm({modalClose}) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className='login-div'>
        <div className='register-button-container'>
          <h2 className='login-title'>Sign in</h2>
          {/* <button className='register-button' onClick={() => {history.push("/signup")}}>Register</button> */}
          <RegisterFormModal/>
        </div>
      <form className='login-form' onSubmit={(e) => handleSubmit(e) && modalClose()}>
        <ul className='error-list'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className='username-div'>
          <div className='username-label-container'>
            <label className='username-label'>
              Username/Email address
            </label>
          </div>
          <div className='username-input-container'>
            <input className='username-input'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='password-div'>
          <div className='password-label-container'>
          <label className='password-label'>
            Password
          </label>
          </div>
          <div className='password-input-container'>
            <input className='password-input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='submit-button-container'>
          <button className='submit-button' type="submit">Sign In</button>
        </div>
      </form>
    </div>

  );
}

export default LoginForm;