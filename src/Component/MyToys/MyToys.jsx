import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyToys = () => {
const [datas,setDatas]=useState([]);
const {user}=useContext(AuthContext)
useEffect(()=>{
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setDatas(data))
},[user])


    return (
        <div>
            <div>
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
        </div>
    );
};

export default MyToys;