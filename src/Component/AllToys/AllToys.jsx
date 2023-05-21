import { useEffect, useState } from 'react';
import Tbody from './Tbody';


const AllToys = () => {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState(" ")
    console.log(search)
   

    useEffect(() => {
        fetch('https://assingment-11-server-blue.vercel.app/alltoyes')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    const handleSearch = () => {
        fetch(`https://assingment-11-server-blue.vercel.app/getToyByText/${search}`)
            .then(res=>res.json())
            .then(data=>setDatas(data))
    }
    return (
        <div>
            
            <h1 className='text-5xl font-bold text-center mb-10'>All Toys</h1>
            <div className=" p-2 text-center mb-10">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="p-1 input input-bordered"
                />{" "}
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
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
                            datas.slice(0, 20).map((data, index) => <Tbody key={data._id}
                                data={data}
                                index={index}
                            ></Tbody>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;