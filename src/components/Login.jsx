import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    // Redirect After Login
    // const location = useLocation();
    // console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();

        // Get Input Field Value
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
            return <Navigate to="/orders" replace={true}></Navigate>
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
                
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
            return <Navigate to="/orders" replace={true}></Navigate>
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <span className="label-text-alt">Don't have an account yet? <Link className="label-text-alt link link-hover text-blue-700" to="/register">Sign up</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login With Email</button>
                            </div>

                        </form>

                        <div className="form-control pt-0 card-body">
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">Login With Google</button>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;