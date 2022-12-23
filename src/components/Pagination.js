import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, setCurrentPage, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center space-x-1 mt-10">
            {
                // Previous Btn
                currentPage <= 1 ||
                <button onClick={() => setCurrentPage(current => current - 1)} title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
            }
            {
                pageNumbers.map(number => (
                    <button key={number} onClick={() => setCurrentPage(number)} type="button" className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md hover:bg-white hover:bg-opacity-10 ${number === currentPage && 'bg-white bg-opacity-10 text-white'}`} title="Page 1">{number}</button>
                ))
            }
            {
                // Next Btn
                (currentPage * itemsPerPage) >= totalItems ||
                <button onClick={() => setCurrentPage(current => current + 1)} title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            }
        </div>
    );
};

export default Pagination;