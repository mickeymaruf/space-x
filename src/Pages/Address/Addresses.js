import React, { useEffect, useState } from 'react';
import PageSpinner from '../../components/PageSpinner';
import Pagination from '../../components/Pagination';
import SearchField from '../../components/SearchField';
import Address from './Address';

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(16);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.spacexdata.com/v3/payloads')
            .then(res => res.json())
            .then(data => {
                setAddresses(data);
                setLoading(false);
            });
    }, [])

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = addresses.slice(indexOfFirstItem, indexOfLastItem);

    if (loading) {
        return <PageSpinner />
    }

    return (
        <section className='w-11/12 mx-auto pb-10 pt-1'>
            <SearchField setSearchText={setSearchText} />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
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