import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
  const location = useLocation();

  // console.log(location);

  const logout = () => {
    Auth.logout();
  };


  return (
    <header className="headerColor sticky-top">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-3 text-start">
          <Link to="/homepage" style={{ textDecoration: 'none' }}>
            <h1 className="headerTitle ms-2 mt-2">GameShare.</h1>
          </Link>
        </div>
        <div className="col-auto"></div>
        <div className="col text-end me-2">
          {Auth.loggedIn() ? (
            <>
              <Link to="/homepage" className='userNameHeader me-2'> 
                {Auth.getProfile().data.username}
              </Link>
              {location.pathname !== '/homepage' && location.pathname !== '/' && (
                <Link to="/homepage">
                  <button className="button-80 ms-1" type="button">
                    Dashboard
                  </button>
                </Link>
              )}
              {location.pathname !== '/inbox' && location.pathname !== '/' && (
                <Link to="/inbox">
                  <button className="button-80 ms-1" type="button">
                    Inbox
                  </button>
                </Link>
              )}
              {location.pathname == '/' || location.pathname == '/inbox' && (
                <Link to="/login">
                  <button
                    className="button-80 ms-1"
                    type="button"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </Link>
              )}
              {/* {location.pathname === '/' && (
                <Link to="/login">
                  <button className="button-80 ms-1" type="button">
                    Logout
                  </button>
                </Link>
              )} */}
              {location.pathname === '/signup' && (
                <Link to="/login">
                  <button className="button-80 ms-1" type="button">
                    Login
                  </button>
                </Link>
              )}
            </>
          ) : location.pathname !== '/' && (
            <>
              {location.pathname !== '/login' && (
                <Link to="/login">
                  <button className="button-80 ms-1" type="button">
                    Login
                  </button>
                </Link>
              )}
              {location.pathname !== '/signup' && (
                <Link to="/signup">
                  <button className="button-80 ms-1" type="button">
                    Signup
                  </button>
                </Link>
              )}
            </>
          )}
          
        </div>
      </div>
    </header>
  );
};

export default Header;
