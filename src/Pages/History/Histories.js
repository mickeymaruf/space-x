import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageSpinner from '../../components/PageSpinner';
import Pagination from '../../components/Pagination';
import SearchField from '../../components/SearchField';
import { getHistoriesData } from '../../features/history/historySlice';
import History from './History';

const Histories = () => {
    const { isLoading, histories, error } = useSelector(state => state.history);
    const { searchText } = useSelector(state => state.filter);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHistoriesData());
    }, [dispatch])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = histories?.slice(indexOfFirstItem, indexOfLastItem);

    if (isLoading) {
        return <PageSpinner />
    }

    if (error) {
        return <h1 className='w-11/12 mx-auto mt-10'>
            <span className='bg-slate-700 p-2'>{error}</span>
        </h1>
    }

    return (
        <section className='w-11/12 mx-auto pb-10 pt-1'>
            <SearchField />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    histories &&
                        searchText
                        ? histories.filter(history =>
                            history.title.toLowerCase().includes(searchText.toLowerCase())
                            || history.details.toLowerCase().includes(searchText.toLowerCase())
                        ).map(history => <History
                            key={history.id}
                            history={history}
                        ></History>)
                        : currentItems.map(history => <History
                            key={history.id}
                            history={history}
                        ></History>)
                }
            </div>
            {
                // Pagination
                !searchText
                && <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={histories.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            }
        </section>
    );
};

export default Histories;