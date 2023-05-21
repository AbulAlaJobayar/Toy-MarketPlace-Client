import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const ShopByDetails = ({ toy }) => {
    const user=useContext(AuthContext)
    const { _id,photo,price,toyName,rating} = toy || {}

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={photo} alt="marvel" className='w-full h-60' /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold capitalize text-first-Color">{toyName}</h2>
                <p className="text-xl font-bold capitalize text-second-Color">Price: ${price}</p>
                <p className="text-xl font-bold capitalize text-second-Color">Rating: {rating} <sup className='text-base'>Stars</sup></p>

                <div className="w-full">
                <Link to={`/viewdetails/${_id}`}>
                            <button className='btn btn-primary w-full'> view details</button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopByDetails;