import React, { useEffect, useState } from 'react';
import Tbody from './Tbody';

const AllToys = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltoyes')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mb-10'>All Toys</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Toy</th>
                            <th>Seller Info</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.slice(0, 20).map(data => <Tbody key={data._id}
                                data={data}
                            ></Tbody>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;