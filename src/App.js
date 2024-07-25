  import  React  from 'react';
import {Route, Link} from "react-router-dom";
import  ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './components/DashboardPage';
import SignupPage from './components/SignupPage';
import LoginPage from  './components/LoginPage';
import authService from './lib/authService';
import './App.css';

class App extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      isSigneIn: true,
      merchant: {}
    }

  }

  signOutDeliverere = () => {
    authService.signOut()
  
    this.setState(state => {
      return {
        isSignedIn: false,
        deliverer: {}
      }
    })
  }



  render() {

    const { merchant } = this.state;

    return (
      <div className="App">
         {authService.isAuthenticated()}
         <nav className="nav-menu">
            {authService.isAuthenticated() && <Link to='/'>Dashboard</Link>}
            {!authService.isAuthenticated() ?  <Link to="/login">SIGN IN</Link> :
              <button className="signUp-button" onClick= {this.signOutDeliverere}>Sign Out</button>}

              {!authService.isAuthenticated() ? (<Link to="/signup">REGISTER</Link>) : (null)} 
         </nav>
         <main className="main-menu">
            <Route 
                exact={true}
                path="/login"
                render={(props) => <LoginPage  {...props}/>} 
              />
              <Route 
                exact={true}
                path='/signup' 
                render = {(props) => <SignupPage {...props} />}
              />
              <ProtectedRoute 
                exact={true}
                path='/'
                merchant={merchant} 
                component={DashboardPage}
              />
         </main>
      </div>
    );
  }

}

export default App;
