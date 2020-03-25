import  React  from 'react';
import {Route, Link} from "react-router-dom";
import  ProtectedRoute from './components/ProtectedRoute';
import SignupPage from './components/SignupPage';
import LoginPage from  './components/LoginPage';
import authService from './lib/authService';
import './App.css';

class App extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      isSigneIn: false,
      merchat: {}
    }

  }
  render() {
    return (
      <div className="App">
         {authService.isAuthenticated()}
         <nav className="nav-menu">
            <Link>REGISTER</Link>
            <Link>Dashboard</Link>
         </nav>
        {/* <h1>Merchant</h1> */}

        
        {/* <SignupPage /> */}
        <LoginPage />

     
      </div>
    );
  }

}

export default App;
