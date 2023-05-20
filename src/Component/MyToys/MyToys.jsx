import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysBody from "./MyToysBody";


const MyToys = () => {
    const [datas, setDatas] = useState([]);
    const { user } = useContext(AuthContext)
    const [toy,setToy]=useState(datas)
    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [datas])


    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center mb-10">My Toys</h1>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                   #
                                </th>
                                <th>Toy</th>
                                <th>Seller Info</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datas.map((data,index )=> <MyToysBody key={data._id}
                                    data={data}
                                    index={index}
                                    toy={toy}
                                    setToy={setToy}
                                ></MyToysBody>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;