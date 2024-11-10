import React from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

const handleResister =(e)=>{
    e.preventDefault();
   
    const email= e.target.email.value;
    const password = e.target.password.value;
    // console.log(email,password);
    // 

    createUserWithEmailAndPassword(auth,email,password)
    .then((result)=>{
     console.log(result)
    }).catch(error=>{
           console.log(error)
    })
}



  return (
    <div >
      <h1>Sign Up</h1>
      <form onSubmit={handleResister} className="flex flex-col gap-6 justify-center items-center mt-6">
        <input
          type="email"
          placeholder="Enter your email" name="email"
          className="input input-bordered input-warning w-full max-w-xs"
        />

        <input
          type="password"
          placeholder="Enter your password" name="password"
          className="input input-bordered input-warning w-full max-w-xs"
        />

        <button className="btn w-52 btn-outline btn-secondary">Resister</button>
      </form>
    </div>
  );
};

export default SignUp;
