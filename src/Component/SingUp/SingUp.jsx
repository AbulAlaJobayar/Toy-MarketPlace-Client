import { Link } from "react-router-dom";


const SingUp = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;

        console.log(name,email, password,photo);
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
                        <input className="btn btn-primary w-full mt-5" type="submit" value="Login" />

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