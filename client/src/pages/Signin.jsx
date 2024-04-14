import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from '../user/userSlice';
import { OAuth } from '../components/OAuth';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { loading, error } = useSelector((state) => state.user);
  // const [err, setErr] = useState('');
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmut = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      // setLoading(true);
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log(data.success);
      if (data.success === false) {
        // setLoading(false);
        // setErr(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setErr(null);
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      // setLoading(false);
      // setErr(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign in</h1>
      <form onSubmit={handleSubmut} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          className="border rounded-lg p-3"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          className="border rounded-lg p-3"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-slate-800 text-white uppercase p-3 rounded-lg hover:opacity-95"
        >
          {loading ? 'Loading...' : 'Sign in'}
        </button>
        <OAuth />
      </form>
      <div className="flex items-center gap-2 my-4">
        <p>create new account?</p>
        <Link to={'/signup'}>
          <span className="text-blue-700">signup</span>
        </Link>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Signin;
