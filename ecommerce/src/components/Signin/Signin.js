import React from "react";
import { Link} from 'react-router-dom';
import './Signin.css'

function Signin() {


  return (
    <div className="">
      <h1 className="display-4 text-info text-center mt-4" style={{'fontFamily':'Merriweather'}}>Sign In</h1>
      <form
        action=""
        className="w-50 mx-auto mt-3 bg-light p-4 shadow mb-5"
      >
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

        <button
          type="submit"
          className="btn btn-info text-secondary d-block mx-auto fs-5"
        >
          Sign In  
        </button>
      </form>

      <p className="lead text-center mb-5 ">
        New User !
        <Link to="/signup" className="fs-4 px-3 ">
          Sign Up
        </Link>
        here
      </p>
    </div>
   
  );
}

export default Signin;