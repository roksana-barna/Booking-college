import React,{useState} from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom';
import Profile from './Profile';

const ProfileEdit = () => {
    const [userDetails, setUserDetails] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        university: 'Sample University',
        address: 'Sample Address',
      });
    return (
        
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
            <Route path="/" exact>
              <h1>Welcome to Home Page</h1>
            </Route>
            <Route path="/profile">
              <Profile userDetails={userDetails} setUserDetails={setUserDetails} />
            </Route>
        </div>
      </Router>
        
    );
};

export default ProfileEdit;