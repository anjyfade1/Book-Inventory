import React from 'react';
import './Search.css';

const Search =(props) => {

        return (
            <div className='Search'>
                <form className='form'>
                    <input  
                        className='input' 
                        placeholder='Search'   
                        type='text'
                        onChange={props.onchange}
                    />
                 
                </form>
            </div>
        )
    
}

export default Search;