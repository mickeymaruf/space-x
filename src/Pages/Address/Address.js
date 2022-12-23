import React from 'react';

const Address = ({ address }) => {
    const { payload_id, payload_type, nationality, customers, manufacturer, orbit, payload_mass_kg, payload_mass_lbs, reused } = address;
    return (
        <div className='border rounded flex flex-col p-5'>
            <div className='flex justify-between'>
                <p className='font-thin uppercase text-sm'>{payload_type}</p>
                <p className='font-thin text-sm'>{manufacturer}</p>
            </div>
            <h2 className='text-xl font-bold'>{payload_id}</h2>
            <p className='font-thin text-sm'>{nationality}</p>
            <p className='font-thin text-sm'>{customers[0]}</p>
            <p className='font-thin text-sm'>ORBIT: {orbit}</p>
            <p className='font-thin text-sm'>Weight (kg): {payload_mass_kg}</p>
            <p className='font-thin text-sm'>Weight (lbs): {payload_mass_lbs}</p>
        </div>
    );
};

export default Address;