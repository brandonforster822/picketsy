import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useHistory } from 'react-router-dom';
import { RegisterFormModal } from '../RegisterFormModal/index.js'

function SignupFormPage() {
  const history = useHistory()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null)
  const [errors, setErrors] = useState([]);
//   const setShowModal = RegisterFormModal()
  if (sessionUser) {
    //   setShowModal(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password, image }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const updateFile = (e) => {
    const file = e.target.files[0]
    if (file) setImage(file)
  }

  return (
    <div className='login-div'>
        <div className='register-button-container'>
          <h2 className='login-title'>Register</h2>
        </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <ul className='error-list'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className='username-div'>
          <div className='username-label-container'>
            <label className='username-label'>
              Username
            </label>
          </div>
          <div className='username-input-container'>
            <input className='username-input'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='email-div'>
          <div className='email-label-container'>
            <label className='email-label'>
              Email
            </label>
          </div>
          <div className='email-input-container'>
            <input className='email-input'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <div className='confirm-password-div'>
          <div className='confirm-password-label-container'>
          <label className='confirm-password-label'>
            Confirm Password
          </label>
          </div>
          <div className='confirm-password-input-container'>
            <input className='confirm-password-input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <div>
            <label>
              upload ur pic
            </label>
          </div>
          <div>
            <input type='file' onChange={updateFile} />
          </div>
        </div>
        <div className='submit-button-container'>
          <button className='submit-button' type="submit">Register</button>
        </div>
      </form>
    </div>

  );
}

export default SignupFormPage;