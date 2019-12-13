import React, {Component} from 'react';

class BookFilter extends Component {

    setValue = (event) => {
        this.props.setValue(event);
    }

	render() {
		return(
            <div className='book-filter'>
                <p>Search for books:</p>
                <input type='text' onChange={this.setValue}/>
            </div>
		)
	}
}

export default BookFilter;