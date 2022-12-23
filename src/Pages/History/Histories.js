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
        <section className='w-11/12 mx-auto pb-10 pt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                histories.map(history => <History
                    key={history.id}
                    history={history}
                ></History>)
            }
        </section>
    );
};

export default Histories;