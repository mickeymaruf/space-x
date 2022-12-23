import React, { useEffect, useState } from 'react';
import PageSpinner from '../../components/PageSpinner';
import Pagination from '../../components/Pagination';
import History from './History';

const Histories = () => {
    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.spacexdata.com/v3/history')
            .then(res => res.json())
            .then(data => {
                setHistories(data)
                setLoading(false);
            });
    }, [])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = histories.slice(indexOfFirstItem, indexOfLastItem);

    if (loading) {
        return <PageSpinner />
    }

    return (
        <section className='w-11/12 mx-auto pb-10 pt-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    currentItems.map(history => <History
                        key={history.id}
                        history={history}
                    ></History>)
                }
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={histories.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </section>
    );
};

export default Histories;