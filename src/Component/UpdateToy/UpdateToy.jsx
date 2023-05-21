import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateToy = () => {
    const data = useLoaderData()
    // Price, available quantity, Detail description)
    const { category, details, photo, price, quantity, rating, sellerName, selleremail, toyName, _id } = data || {};

    const handleUpdatedToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        

        const addToy = {
            price:price,
            quantity:quantity,
            details:details,
            
           

        }

        fetch(`https://assingment-11-server-blue.vercel.app/postdata/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Toy Updatedd Successfully !',
                  })
            }
        })
    }



    return (
        <div className='w-5/6 mx-auto'>
            <h1 className='text-5xl font-bold text-center mb-10'> Update  Toy</h1>

            <form onSubmit={handleUpdatedToy}>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                defaultValue={price}
                                name="price"
                                placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="number"
                                name="quantity"
                                defaultValue={quantity}
                                placeholder="Available quantity" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>

                            <textarea name="details" cols="" rows="10" defaultValue={details} className="input input-bordered"></textarea>
                        </div>
                    </div>
                    <div className="form-control my-6">
                        <input type="submit" className='btn btn-block  btn-primary' value="Update product" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;