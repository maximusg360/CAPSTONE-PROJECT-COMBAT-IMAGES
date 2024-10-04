import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:8080/images/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed.');
        return;
      }

      // Optionally, you can redirect to the login page on successful signup
      navigate('/LogIn');
    } catch (err) {
      console.log(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
 
    //   <div className='form-container'>
    //     <h1 className="SignUpHeader" style={{ fontSize: '100px', textAlign: 'center', color: 'white',
    //               }}>Sign Up</h1>
    //     <form className='inputs' onSubmit={submitData}>
    //       {error && <p className='text-red-500'>{error}</p>}
    //       <div className='input'>
     
    //         <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
    //       </div>
    //       <div className='input'>
           
    //         <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
    //       </div>
    //       <div className='input'>
    //                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
    //       </div>
         
    //   </div>
       <div className="w-full max-w-xs mx-auto mt-5 p-2 shadow-md rounded-md bg-gray-800 text-white">
       <form onSubmit={submitData}>
         <label className="block text-gray-400 text-sm font-bold mb-2">
          Name
         </label>
         <input
           className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
            type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        
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
            <Link to='/LogIn' style={{color: 'white'}}>Already have an account? Log In</Link>
          </div> 
        </form>
        </div>
            
    
 
  );
}

export default SignUp;
