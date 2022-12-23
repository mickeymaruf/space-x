import React from 'react';

const Address = ({ address }) => {
    const { payload_id, payload_type, nationality, customers, manufacturer, orbit, payload_mass_kg, payload_mass_lbs, reused, orbit_params } = address;
    console.log(address);
    return (
        <div className='border rounded flex flex-col p-5'>
            <div className='flex justify-between font-thin text-sm'>
                <p className=' uppercase'>{payload_type}</p>
                <p className='font-thin opacity-50'>{manufacturer}</p>
            </div>
            <h2 className='text-xl font-bold'>{payload_id}</h2>
            <div className='font-thin text-sm'>
                <p>{nationality}</p>
                <p>Customers: {customers && customers[0]}</p>
                <p>ORBIT: {orbit}</p>
                <p>Weight (kg): {payload_mass_kg ? payload_mass_kg : 'N/A'}</p>
                <p>Weight (lbs): {payload_mass_lbs ? payload_mass_lbs : 'N/A'}</p>
            </div>
            {
                reused
                    ? <p className='font-thin text-sm text-green-500'>reused</p>
                    : <p className='font-thin text-sm text-red-500'>reused</p>
            }
        </div>
    );
};

export default Address;