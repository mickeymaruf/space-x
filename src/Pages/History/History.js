import React from 'react';

const History = ({ history }) => {
    const { title, details, links: { reddit, article, wikipedia }, flight_number, event_date_utc } = history
    return (
        <div className='border rounded flex flex-col'>
            <div className='p-3'>
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='my-2 text-sm'>Flight Number: {flight_number ? flight_number : 'N/A'}</p>
                <p className='mb-3'>{details}</p>
                <p>Event Date: {new Date(event_date_utc).toUTCString()}</p>
            </div>
            <ul className='flex gap-2 mt-auto border-t p-3'>
                {
                    reddit && <li><a target="_blank" rel="noreferrer" className='underline hover:text-blue-500' href={reddit}>Reddit</a></li>
                }
                {
                    article && <li><a target="_blank" rel="noreferrer" className='underline hover:text-blue-500' href={article}>Article</a></li>
                }
                {
                    wikipedia && <li><a target="_blank" rel="noreferrer" className='underline hover:text-blue-500' href={wikipedia}>Wikipedia</a></li>
                }
            </ul>
        </div>
    );
};

export default History;