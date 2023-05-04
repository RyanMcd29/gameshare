import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {

    const logout = (event) => {
        // event.preventDefault();
        Auth.logout();
      };

      return (
        <header>
          <div>
            <div>
              <Link to="/">
                <h1>Game Lender App.</h1>
              </Link>
              <p className="m-0">Loan and Borrow Games Anywhere!</p>
            </div>
            <div>
              {Auth.loggedIn() ? (
                <>
                  {/* <Link to="..."> 
                    {Auth.getProfile().data.username}'s profile
                  </Link> */}
                  <Link to="/inbox">
                    <button>Inbox</button>
                  </Link>
                  <Link to="/login">
                    <button onClick={logout}>Logout</button>
                  </Link>
                  
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                  <Link to="/signup">
                    <button>Signup</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </header>
      );

};

export default Header;