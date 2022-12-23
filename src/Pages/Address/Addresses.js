import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageSpinner from '../../components/PageSpinner';
import Pagination from '../../components/Pagination';
import SearchField from '../../components/SearchField';
import { getAllData } from '../../services/actions/dataAction';
import Address from './Address';

const Addresses = () => {
    const { isLoading, data: addresses, error } = useSelector(state => state)
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(16);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllData('https://api.spacexdata.com/v3/payloads'));
    }, [])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = addresses.slice(indexOfFirstItem, indexOfLastItem);

    if (isLoading) {
        return <PageSpinner />
    }

    return (
        <section className='w-11/12 mx-auto pb-10 pt-1'>
            <SearchField setSearchText={setSearchText} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    addresses &&
                        searchText
                        ? addresses.filter(address =>
                            address.payload_id.toLowerCase().includes(searchText.toLowerCase())
                        ).map(address => <Address
                            key={address.payload_id}
                            address={address}
                        ></Address>)
                        : currentItems.map((address, idx) => <Address
                            key={idx}
                            address={address}
                        ></Address>)
                }
            </div>
            {
                !searchText
                && <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={addresses.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            }
        </section>
    );
};

export default Addresses;