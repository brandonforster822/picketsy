import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import {useDispatch} from "react-redux"
import * as sessionActions from "../../store/session"

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory()
  const [search, setSearch] = useState('')

  const refreshPage = () => {
    window.location.reload()
  }

  const logout = (e) => {
    e.preventDefault()
    dispatch(sessionActions.logout())
    history.push('/')
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='user-div'>
        <h3 onClick={() => history.push(`/account/${sessionUser.username}`)}>Hello, {sessionUser.username} </h3>
        <button className='logout-button' onClick={logout}>Not you?</button>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div className="log-in-modal">
          <LoginFormModal />            
        </div>
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
                        <h2 onClick={() => history.push('/')}>Picketsy</h2>
                    </span>
              </div>
              <div className='search-bar'>
                <form className='search-form'>
                  <div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='search-input' type='text' placeholder='Search for anything'/>
                  </div>
                </form>
                <div className='search-button'>
                  <i className="fas fa-search fa-2x" onClick={() => history.push(`/search/${search}`)}></i>
                </div>
              </div>
              <div className="modals">
                {sessionLinks}
                <div className="shopping-cart">
                    <i className="fas fa-shopping-cart fa-2x" onClick={() => history.push('/cart')}></i>
                </div>
              </div>
            </header>
        </div>
  );
}



export default Navigation;