import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = (user) => {
    // Logic to handle user login (e.g., save user info to state or context)
    console.log('User logged in:', user);
  };

  const login = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        // other options like headers and body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      handleLogin(data.user); // This should now work
      navigate('/home'); // Redirect to home page on successful login
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`http://localhost:8080/images/Login/${email}`, { // Adjust this endpoint as necessary
        method: 'POST',  // Use POST or GET as per your backend requirements
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed.');
        return;
      }

      const data = await response.json();
      // Handle the successful login, e.g., save user info, call handleLogin, etc.
      handleLogin(data.user); // Assuming the API returns user data
      navigate('/home'); // Redirect to home page on successful login
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
 
    <div className="w-full max-w-xs mx-auto mt-5 p-2 shadow-md rounded-md bg-gray-800 text-white">
    <form onSubmit={handleSubmit}>
     
     
      <label className="block text-gray-400 text-sm font-bold mb-2">
        Email
      </label>
      <input
       className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
        type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label className="block text-gray-400 text-sm font-bold mb-2">
        Password
      </label>
      <input
       className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
        type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
    

     <div className='submit-container'>
         <button type='submit' className='submit'>Sign Up</button>
       </div>
       <div className='submit-container'>
         <Link to='/' style={{color: 'white'}}>Already have an account? Log In</Link>
       </div> 
     </form>
     </div>
  );
}

export default Login;
