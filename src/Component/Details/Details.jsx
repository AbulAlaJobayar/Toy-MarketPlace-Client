import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../hooks/Usetitle';

const Details = () => {
    const datas = useLoaderData();
    const { category, details, photo, price, quantity, rating, sellerName, selleremail, toyName, _id } = datas || {};
UseTitle('Details')
    console.log(datas);
    return (
        <div className='w-5/6 mx-auto my-20'>
            <h1 className='text-5xl font-bold text-center mb-16'>View Details</h1>
            <div className="card card-side bg-base-100 shadow-xl mx-auto w-2/3 items-center">
                <div className='1/2'>
                <figure ><img src={photo} alt="Toy" className='w-60 h-60 rounded-full'  /></figure>
                </div>
                <div className="card-body w-1/2">
                    <h2 className="card-title">{toyName}</h2>
                    <p>Seller Name: {sellerName}</p>
                    <p>Seller email: {selleremail}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}star</p>
                    <p>Available quantity: {quantity}</p>
                    <p>Details: {details}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Details;