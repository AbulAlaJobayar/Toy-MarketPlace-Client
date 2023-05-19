
import Lottie from "lottie-react";
import login from "../../assets/93385-login (1).json";
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
    }

    return (
        <div className="hero min-h-screen bg-base-200 gap-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">

                   <img src="https://i.ibb.co/jybS21c/4794658.jpg" alt="" className="mx-auto w-4/5" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  w-1/2">
                    <h1 className="text-5xl font-bold text-center mx-5 my-5">Login now!</h1>

                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
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
                            <input className="btn btn-primary w-full mt-5" type="submit" value="Login" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
