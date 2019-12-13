import React, {Component} from 'react';
import Book from './Book';
import '../App.css';

class App extends Component {

	state = {
        books: []
	}

	componentDidMount() {
		fetch('https://api.myjson.com/bins/1h3vb3')
			.then(res => res.json())
			.then(data => {
				this.setState({books: data.books});
			});
    }
    
	render() {
		return(
			<div className="main">
				{this.state.books.map(book => {
                    return(book.titulo.toUpperCase().includes(this.props.filterValue.toUpperCase()) ? <Book book={book} key={book.titulo}/> : null);
				})}
			</div>
		)
	}
}

export default App;
