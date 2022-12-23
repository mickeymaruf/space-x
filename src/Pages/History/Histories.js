import React, { useEffect, useState } from 'react';
import History from './History';

const Histories = () => {
    const [histories, setHistories] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/history')
            .then(res => res.json())
            .then(data => setHistories(data));
    }, [])
    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                histories.map(history => <History
                    key={history.id}
                    history={history}
                ></History>)
            }
        </div>
    );
};

export default Histories;