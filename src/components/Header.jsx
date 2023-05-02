import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful.')
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='btn btn-ghost normal-case text-xl' to="/">Home</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/register">Register</Link>
                <Link className='btn btn-ghost normal-case text-xl' to="/login">Login</Link>
                {user && <Link className='btn btn-ghost normal-case text-xl' to="/orders">Orders</Link>}

                {
                    user ?
                        <><span>{user.email} </span>
                            <span>
                                <button onClick={handleLogOut} className="btn"><div className="badge badge-info gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    Logout
                                </div></button>
                            </span> </>
                        :
                        <>
                            <Link to="/login"></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;