import React from 'react';

const Tbody = ({data}) => {
    const {category,details,photo,price,quantity,rating,sellerName,selleremail,toyName,_id} = data || {};
    console.log(data);
    return (
        <>
            <tr>
                <th>
                    
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{toyName}</div>
                            <div className="text-sm opacity-50">{category}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {sellerName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{selleremail}</span>
                </td>
                <td>{price}</td>
                <td>{quantity}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default Tbody;