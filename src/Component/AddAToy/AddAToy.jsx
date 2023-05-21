import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Select from 'react-select';
import Swal from "sweetalert2";
import UseTitle from "../../hooks/Usetitle";


const options = [
    { value: 'marvel', label: 'marvel' },
    { value: 'starwars', label: 'starwars' },
    { value: 'avengers', label: 'avengers' },
];


const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    console.log({ user });
    UseTitle("AddAToy")
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyname.value;
        const sellerName = form.sellername.value;
        const selleremail = form.selleremail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category=selectedOption.value;
        const photo=form.photo.value;

        const addToy = {
            
           toyName:toyName,
           sellerName:sellerName,
            selleremail:selleremail,
            price:price,
            rating:rating,
            quantity:quantity,
            details:details,
            category:category,
            photo:photo

        }

        fetch('https://assingment-11-server-blue.vercel.app/postdata',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Toy Added Successfully !',
                  })
                  form.reset()
            }
        })
    }


    return (

        <div className="w-5/6 mx-auto">
            <h1 className='text-5xl font-bold text-center'>Add a Toy</h1>
            <form  onSubmit={handleAddToy}>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" name='toyname'
                                placeholder="Toy Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" 
                            name='sellername'
                                defaultValue={user?.displayName}
                                placeholder="sellerName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name='selleremail'
                                defaultValue={user?.email}
                                placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">category</span>
                            </label>
                            <Select 
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                name="price"
                                placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number"
                                defaultValue="rating"
                                name="rating"
                                placeholder="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="number"
                            name="quantity"
                                defaultValue="Available quantity"
                                placeholder="Available quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"
                            name="photo"
                                
                                placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>

                            <textarea name="details" cols="" rows="10" className="input input-bordered"></textarea>
                        </div>



                    </div>
                    <div className="form-control my-6">
                        <input type="submit" className='btn btn-block  btn-primary' value="Add product" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;