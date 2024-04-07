import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to={'/'}>
          <h1 className="text-sm font-bold sm:text-xl flex flex-wrap">
            <span className="text-slate-500">HRK</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 flex items-center rounded-lg p-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <IoSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4 items-center text-slate-500 ">
          <Link to={'/'}>
            <li className="hidden cursor-pointer text-lg hover:underline sm:inline">
              Home
            </li>
          </Link>
          <Link to={'/about'}>
            <li className="hidden cursor-pointer text-lg hover:underline sm:inline">
              About
            </li>
          </Link>
          <Link to={'/signin'}>
            <li className="cursor-pointer text-sm sm:text-lg hover:underline">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
