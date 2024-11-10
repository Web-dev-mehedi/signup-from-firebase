import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resister = () => {
const [error,setError]= useState('');
const [showPassword, setShowPassword] = useState(false)



    // for from submit
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked
    console.log(email, password,terms);
    //

if(!terms){
   setError("please accept our terms and condition");
   return
}

if(password.length < 6){
    setError("password need up to six carecter");
    return
}

// for
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]+$/;
if(!regex.test(password)){
   setError('at least one uppercase, one lowercase, one number, one special character');
   return
}

    setError('')
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
       console.log(result);
       setError("succesfully account created");
       //    
       sendEmailVerification(auth.currentUser)
    // update profile
      const profile ={
        displayName :name,
        photoURL : url,

      }  
      
      updateProfile(auth.currentUser,profile)
      .then(()=>{
        console.log("user profile updated")
      }).catch(error=> console.log("User profile update error"))






    }).catch(error =>{
        console.log(error.message)
        setError("account already created")
    })


  };

  return (
    <div className="w-[500px] mx-auto mt-10">
      <h1 className="text-5xl">Resister Now</h1>
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
    
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            className="input input-bordered"
            name="url"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword?"text":"password"}
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />

          <div className="form-control relative">
            {/* for change dynamically */}
             <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 -top-8">
               {
                showPassword ? <FaEyeSlash/>:<FaEye/>
               }
             </span>
            <label className="label cursor-pointer justify-start gap-5">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-primary"
                name="terms"
              />
              <span className="label-text">Accept our terms and condition</span>

            </label>
          </div>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Resister</button>
        </div>
      </form>
      
      <p>
          Already have an account ?  <Link to="/login">LogIn</Link> 
      </p>
      {
        error && <p className="bg-slate-400"> {error}</p>
      }
    </div>
  );
};

export default Resister;
