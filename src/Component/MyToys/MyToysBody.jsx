import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const MyToysBody = ({data}) => {

    const {category,details,photo,price,quantity,rating,sellerName,selleremail,toyName,_id} = data || {};
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
                <td>
                    <button className="btn btn-ghost btn-xs">Update </button>

                </td>
                <td >
                    <AiFillDelete className='cursor-pointer'></AiFillDelete>
                </td>
            </tr>
        </>
    );
};

export default MyToysBody;
