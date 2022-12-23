import React from 'react';

const History = ({ history }) => {
    const { title, details, links, flight_number, event_date_utc } = history
    return (
        <div className='border rounded flex flex-col'>
            <div className='p-3'>
                <h2 className='text-lg font-bold'>{title}</h2>
                <p className='my-2 text-sm'>Flight Number: {flight_number ? flight_number : 'N/A'}</p>
                <p className='mb-3'>{details}</p>
                <p className='opacity-50 text-sm'>Event Date: {new Date(event_date_utc).toUTCString()}</p>
            </div>
            <ul className='flex gap-2 mt-auto border-t p-3'>
                {
                    links?.reddit && <li><a target="_blank" rel="noreferrer" className='underline hover:text-blue-500' href={links?.reddit}>Reddit</a></li>
                }
                {
                    links?.article && <li><a target="_blank" rel="noreferrer" className='underline hover:text-blue-500' href={links?.article}>Article</a></li>
                }
                {
                    links?.wikipedia && <li><a target="_blank" rel="noreferrer" className='underline hover:text-blue-500' href={links?.wikipedia}>Wikipedia</a></li>
                }
            </ul>
        </div>
    );
};

export default History;