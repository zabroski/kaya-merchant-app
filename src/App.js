import  React  from 'react';
import {Route, Link} from "react-router-dom";
import  ProtectedRoute from './components/ProtectedRoute';
import SignupPage from './components/SignupPage';
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
         {authService.isAuthenticated() ? (<Link>REGISTER</Link>) : (null)}
         </nav>
        {/* <h1>Merchant</h1> */}
        <SignupPage />

     
      </div>
    );
  }

}

export default App;
