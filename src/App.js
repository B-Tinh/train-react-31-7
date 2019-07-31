import React, {Component} from 'react';
import Login from './layout/login';
import Profile from './layout/profile';
import Register from './layout/register';
import { Router, Route} from 'react-router-dom';
import history from './history';

class App extends Component {
	
	render(){
  return (        
        <Router history={history}>
       			<Route path ="/"  exact component ={Login} />
		    	<Route path ="/profile" component ={Profile} />
        </Router>   

  );
}
}

export default App;