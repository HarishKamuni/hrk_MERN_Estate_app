import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border rounded-lg p-3"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3"
          id="password"
        />
        <button className="bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={'/signin'}>
          <span className="text-blue-700 cursor-pointer hover:underline">
            sign in
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
