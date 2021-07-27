import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='tc pa2'> 
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search jordans' 
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;

//to add more things its a good idea to wrap in a div
//have searchchange as a function