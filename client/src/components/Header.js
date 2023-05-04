import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {

    const logout = (event) => {
        // event.preventDefault();
        Auth.logout();
      };

      return (
        <header className='headerColor'>
          <div className='row min-vh-10 d-flex justify-content-center align-items-center'>
            <div className='col-3 text-start'>
              <Link to="/homepage" style={{ textDecoration: 'none' }}>
                <h1 className='headerTitle ms-2 mt-2'>GameShare.</h1>
              </Link>
            </div>
            <div className='col-auto'></div>
            <div className='col text-end me-2'>
              {Auth.loggedIn() ? (
                <>
                  {/* <Link to="..."> 
                    {Auth.getProfile().data.username}'s profile
                  </Link> */}
                  <Link to="/homepage">
                    <button className="button-80 ms-1" role="button" type="button">Dashboard</button>
                  </Link>
                  <Link to="/inbox">
                    <button className="button-80 ms-1" role="button" type="button">Inbox</button>
                  </Link>
                  <Link to="/login">
                    <button className="button-80 ms-1" role="button" type="button" onClick={logout}>Logout</button>
                  </Link>
                  
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="button-80 ms-1" role="button" type="button">Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="button-80 ms-1" role="button" type="button">Signup</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
      );

};

export default Header;