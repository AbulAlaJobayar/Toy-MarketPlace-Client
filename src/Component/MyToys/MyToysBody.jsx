import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
const MyToysBody = ({ data, index,toy,setToy }) => {

    const { category, photo, price, quantity,sellerName, selleremail, toyName, _id } = data || {};

    const handleDeleted = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure wont to delete this?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assingment-11-server-blue.vercel.app/postdelete/${_id}`, {
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        // eslint-disable-next-line react/prop-types
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // eslint-disable-next-line react/prop-types
                            const remaining=toy.filter(t=>t._id !==_id)
                            setToy(remaining)
                        }
                    })

            }
        })
    }





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
                   <Link
                   to={`/updatetoy/${_id}`}> <button className="btn btn-ghost btn-xs">Update </button></Link>

                </td>
                <td >
                    <button
                        onClick={() => handleDeleted(_id)}
                    ><AiFillDelete className='cursor-pointer'></AiFillDelete></button>
                </td>
            </tr>
        </>
    );
};

export default MyToysBody;
