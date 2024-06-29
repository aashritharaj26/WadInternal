import React from "react";
import { Link} from 'react-router-dom';
import './Signup.css'

function Signup() {


  return (
    <div className="">
      <h1 className="display-4 text-info text-center mt-4" style={{'fontFamily':'Merriweather'}}>Sign Up</h1>
      <form
        action=""
        className="w-50 mx-auto mt-3 bg-light p-4 shadow mb-5"
      >
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="form-control mb-4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control mb-4"
          />
        </div>
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mb-4"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mb-4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control mb-4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date Of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="form-control mb-4"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            className="form-control mb-4"
          />
        </div>
        <div className="mb-3">
         <h5>
            Address: 
            </h5>
          <label htmlFor="city" className="form-label">
           City
          </label>
          <input
            type="text"
            id="city"
            className="form-control mb-4"
          />
            <label htmlFor="state" className="form-label">
          State
          </label>
          <input
            type="text"
            id="state"
            className="form-control mb-4"
          />
            <label htmlFor="country" className="form-label">
           Country
          </label>
          <input
            type="text"
            id="country"
            className="form-control mb-4"
          />
           <label htmlFor="pincode" className="form-label">
           Pincode
          </label>
          <input
            type="text"
            id="pincode"
            className="form-control mb-4"
          />
        </div>
        <button
          type="submit"
          className="btn btn-info text-secondary d-block mx-auto fs-5"
        >
          Sign Up 
        </button>
      </form>

      <p className="lead text-center mb-5 ">
       Already Registered? 
        <Link to="/signin" className="fs-4 px-3 ">
          Sign In
        </Link>
        here
      </p>
    </div>
   
  );
}

export default Signup;