import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Tbody = ({ data, index }) => {
    const { user } = useContext(AuthContext)
    const { category, details, photo, price, quantity, rating, sellerName, selleremail, toyName, _id } = data || {};

    return (
        <>
            <tr>
                <td>
                    {index + 1}
                </td>
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
                <td>${price}</td>
                <td>{quantity}</td>
                <td>
                    {
                        user ? <Link to={`/viewdetails/${_id}`}>
                            <button> view details</button>
                        </Link> : <Link to="/login">
                            <button> view details</button>
                        </Link>
                    }


                </td>
            </tr>
        </>
    );
};

export default Tbody;