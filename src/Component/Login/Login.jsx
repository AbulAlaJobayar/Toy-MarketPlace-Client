import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    useEffect(() => {
        document.title = (` Login--Funtopia`);
    }, []);
    const { loginUser, gmailLogin } = useContext(AuthContext)
    const [error, setError] = useState()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                if(user){
                 return navigate(from, { replace: true })
                }
                
        
            })
            .then(error => {
                setError(error);
            })
    }

    const handleGoogleSingin = () => {
        gmailLogin()
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    return (
        <div className="hero min-h-screen  gap-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">

                    <img src="https://i.ibb.co/jybS21c/4794658.jpg" alt="" className="mx-auto " />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  w-1/2">
                    <h1 className="text-5xl font-bold text-center mx-5 my-5 text-second-Color">Login now!</h1>

                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                            <label className="text-red-600">{error}</label>
                            <input className="btn btn-primary w-full mt-5" type="submit" value="Login" />

                            <label className="label">
                                <span className="label-text-alt link link-hover text-base">Don not have an account? <Link to='/singup' className='text font-bold'> Register</Link></span>
                            </label>
                        </form>
                        <div className='flex flex-col'>
                            <button className='mt-2 btn btn-primary ' onClick={handleGoogleSingin} > <span className="mr-3 text-bold text-2xl"><FaGoogle ></FaGoogle></span> sing in with google</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
