import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [error,setError] = useState('');
  //  for collecting email
   const emailRef = useRef('');
   console.log(emailRef.current.value)
  // for to user account
   const navigate= useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // login user
    setError('')
    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
        console.log(result.user)
        if(!result.user.emailVerified){
          setError("You nedd to varify your email");
          return
       }else{
          setError("login succesfull");
          setTimeout(() => {
            navigate('/')
          }, 700);
       }
    }).catch(error =>{
      console.log("Error",error.message);
      setError("wrong email or password")
    })
    console.log(email,password)

  }
//  for forgot passwords
  const handleForgetPass =()=>{
    const email = emailRef.current.value;
    if(!email){
     console.log("please provide a valid email address");
     setError("please provided a valid user emails")
    }else{
       // sent reset email
      sendPasswordResetEmail(auth,email)
      .then(()=>{
          alert('password reset email send, please check your gmail')
      })
    }
   

  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            {/*  */}
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {/*  */}
        
          <p>{error}</p>
          <p><Link to="/register">Are you new to this websites? Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
