import React, {Component} from 'react';
import logo from '../images/logo.png';
import '../App.css';

class Header extends Component {

	render() {
		return(
			<div>
				<img src={logo} alt='Bookstore Logo'/>
			</div>
		)
	}
}

export default Header;
