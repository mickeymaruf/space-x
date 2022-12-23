import React, { useEffect, useState } from 'react';
import Address from './Address';

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/payloads')
            .then(res => res.json())
            .then(data => setAddresses(data));
    }, [])
    return (
        <section className='w-11/12 mx-auto pb-10 pt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                addresses.map((address, idx) => <Address
                    key={idx}
                    address={address}
                ></Address>)
            }
        </section>
    );
};

export default Addresses;