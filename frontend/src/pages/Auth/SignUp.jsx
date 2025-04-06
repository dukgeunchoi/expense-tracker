import React from 'react'
import { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/inputs/Input';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';
import { validateEmail, validatePassword } from '../../utils/helper';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profilePicUrl = "";
    if (!fullName) {
      setError('Please enter your full name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!validatePassword(password)) {  
      setError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    setError('');

    // API CALL
    // const res = await fetch('http://localhost:5000/api/auth/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //     fullName,
    //     profilePic
    //   }),
    // });

    // const data = await res.json();

    // if (res.status !== 200) {
    //   setError(data.message);
    // } else {
    //   localStorage.setItem('token', data.token);
    //   navigate('/dashboard');
    // }
  }

  return (
    <AuthLayout>
        <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
          <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
          <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>

          <form onSubmit={handleSignUp}>

            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Input value={fullName} 
                    onChange={(e) => setFullName(e.target.value)}
                    label="Full Name"
                    placeholder="Full Name"
                    type="text"
              />
              <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email Address" placeholder="Email" type="text"/>
              <div className='col-span-2'>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="Password" type="password" />
              </div>
            </div>

            {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

            <button type="submit" className='btn-primary'>Sign Up</button>

            <p className='text-sm text-gray-500'>Already have an account? <Link to="/login" className='text-primary'>Login</Link></p>
          </form>

        </div>
    </AuthLayout>
 )
}

export default SignUp