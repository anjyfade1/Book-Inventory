import React from 'react';
import './Books.css';
import BookCard from './BookCard/BookCard';
import Spinner from '../UI/Spinner/spinner';

const Books = (props) => {

    
    const book = props.books;

    
    return (
        <div className='Books'>
             
                    {book.filter((book) => {

                        if (props.text === '') {
                            return book
                        } else if(book.name.toLowerCase().includes(props.text.toLowerCase())){
                            return book
                        }else if(book.publisher.toLowerCase().includes(props.text.toLowerCase())){
                            return book
                        }else if(book.isbn.toLowerCase().includes(props.text.toLowerCase())){
                            return book
                        }else if(book.released.toLowerCase().includes(props.text.toLowerCase())){
                            return book
                        }
            }).map( (book,id) => {return <Spinner/>?<BookCard  key={id} {...book}></BookCard>: null } )}
                
        </div>
    )
}


export default Books;