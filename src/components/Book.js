import React, {Component} from 'react';
import '../App.css';

class Book extends Component {

	render() {
        var {book} = this.props;
		return(
			<div className='book'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={book.portada} alt={book.titulo}/>
                        </div>
                        <div className="flip-card-back">
                            <h3>{book.titulo}</h3>
                            <p>{book.descripcion}</p>
                            <a href={book.detalle} data-fancybox="images" data-caption={book.titulo}>
                                <button>More Info</button>
                            </a>                            
                        </div>
                    </div>
                </div>				
			</div>
		)
	}
}

export default Book;
