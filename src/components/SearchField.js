import React from 'react';

const SearchField = ({ setSearchText }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchText("");
        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit} className='mb-5 flex'>
            <input onKeyUp={(e) => setSearchText(e.target.value)} type="search" name="search" className='bg-black border outline-none border-white px-2' placeholder='Search by title' />
            <button className='bg-white text-black py-2 px-3'>Search</button>
        </form>
    );
};

export default SearchField;