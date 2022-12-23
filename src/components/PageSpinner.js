import React from 'react';

const PageSpinner = () => {
    return (
        <div className='text-3xl py-20 animate-pulse flex items-center justify-center'>
            L<div className='w-4 h-4 border-4 border-white mt-1 animate-spin rounded-full border-dashed'></div>ading...
        </div>
    );
};

export default PageSpinner;