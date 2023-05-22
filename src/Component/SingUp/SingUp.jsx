
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    useEffect(() => {
        document.title = (` SingUP--Funtopia`);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
               
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });

    }

    return (
        <div className="hero min-h-screen  gap-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">

                    <img src="https://i.ibb.co/FqHWGRg/6300959.jpg" alt="" className="mx-auto w-4/5" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  w-1/2">
                    <h1 className="text-5xl font-bold text-center mx-5 my-5 text-second-Color">Sing Up!</h1>

                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    required
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="password"
                                    className="input input-bordered"
                                />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />


                            </div>
                            <div><h1>{error}</h1></div>
                            <input className="btn btn-primary w-full mt-5" type="submit" value="SingUp" />

                            <label className="label">
                                <span className="label-text-alt link link-hover text-base">Already  have an account? <Link to='/login' className='text font-bold'> Login</Link></span>
                            </label>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;