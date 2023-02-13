import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageSpinner from '../../components/PageSpinner';
import Pagination from '../../components/Pagination';
import SearchField from '../../components/SearchField';
import { getAddressesData } from '../../features/address/addressSlice';
import Address from './Address';

const Addresses = () => {
    const { isLoading, addresses, error } = useSelector(state => state.address)
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(16);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddressesData());
    }, [dispatch])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = addresses.slice(indexOfFirstItem, indexOfLastItem);

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
                // Pagination
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