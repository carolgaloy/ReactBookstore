import React, {Component} from 'react';
import Header from './components/Header.js';
import BookFilter from './components/BookFilter.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {

	state = {
		filterValue: ''
	}

	setValue = (event) => {
        this.setState({
            filterValue: event.target.value
        });
    }

	render() {
		return(
			<div className="App">
				<div className='header'>					
					<Header/>
					<BookFilter setValue={this.setValue}/>
				</div>
				<Main filterValue={this.state.filterValue}/>
				<Footer/>
			</div>
		)
	}
}

export default App;
