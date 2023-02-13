import React from 'react';
import { useDispatch } from 'react-redux';
import { searchReducer } from '../features/filter/filterSlice';

const SearchField = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(searchReducer(""));
        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit} className='mb-5 flex'>
            <input onKeyUp={(e) => dispatch(searchReducer(e.target.value))} type="search" name="search" className='bg-black border outline-none border-white px-2' placeholder='Enter to clear' />
            <button className='bg-white text-black py-2 px-3'>Search</button>
        </form>
    );
};

export default SearchField;