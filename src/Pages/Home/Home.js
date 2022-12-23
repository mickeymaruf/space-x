import React, { useState } from 'react';

const Home = () => {
    const [histories, setHistories] = useState([]);
    useState(() => {
        fetch('https://api.spacexdata.com/v3/history')
            .then(res => res.json())
            .then(data => setHistories(data));
    }, [])

    return (
        <div>
            {
                histories.map(history => <div key={history.title}>
                    {history.title}
                </div>)
            }
        </div>
    );
};

export default Home;