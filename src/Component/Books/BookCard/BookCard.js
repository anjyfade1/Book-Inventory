import React from 'react';
import './BookCard.css';

const BookCard = ({name,isbn,publisher,authors,released}) => {
    return (
        <div className= 'BookCards'>
            <div className='bookcard'>
                <h2>{publisher}</h2>
                <h3>{name}</h3>
                <p>{isbn}</p>
                <p>{authors}</p>
                <p>{released}</p>
            </div>
           
        </div>
    )
}


export default BookCard;