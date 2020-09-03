import React, {Component} from 'react';
import {Home} from './components/Home'
import {Login} from './components/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
		console.log('por qqqqqqqqqqqqqqqqqqqqq'+this.state.isLoggedIn);
		this.handleState = this.handleState.bind(this);
		
		
	}
	render(){
		console.log('entro a render');
		console.log(this.state.isLoggedIn);
		if (this.state.isLoggedIn) {
			console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz33333333333333333333');
			return(			
				< Home /> 
			);	
		}
		else{
			console.log('llllllllllleego aqui zzzzzzzzzzzzzzzzzzzzzzzzz2222222222222222');
			return(
				< Login logged={this.handleState} />
			);			
		} 
    }
	handleState(){
		setTimeout(() => {
		  this.setState({isLoggedIn: true});
		}, 100);
		
	}
	
}
export default App;	
