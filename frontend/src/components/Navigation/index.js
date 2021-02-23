import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    // <ul>
    //   <li>
    //     <NavLink exact to="/">Home</NavLink>
    //     {isLoaded && sessionLinks}
    //   </li>
    // </ul>
    <div className='nav-header'>
            <header className='nav-header-inner'>
              <div className='nav-header-icon'>
                <a href="/"/>
                    <span className='picketsy-icon'>
                        <img src="https://cdn1.vectorstock.com/i/thumb-large/87/55/wooden-fencing-concept-outline-icon-vector-34438755.jpg"/>
                    </span>
              </div>
              <div className='search-bar'>
                <form className='search-form'>
                  <div>
                    <input type='text' placeholder='Search for anything'/>
                  </div>
                </form>
              </div>
              <div className="modals">
                <ul>
                  <li>
                    <LoginFormModal />
                  </li>
                  <li>
                    <i class="fas fa-shopping-cart"></i>
                  </li>
                </ul>
              </div>
            </header>
        </div>
  );
}

export default Navigation;