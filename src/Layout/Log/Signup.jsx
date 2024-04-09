import {  Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';


const Signup = () => {
    
    const {createUser} = useContext(AuthContext);
    
  

    const submitForm = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('userEmail');
        const password = form.get('password');
        createUser(email , password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
         
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={submitForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='userEmail' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                        <label className="label">
                            <Link to='/Login' className="btn label-text-alt link link-hover">Go to Login</Link>
                        </label>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Signup;