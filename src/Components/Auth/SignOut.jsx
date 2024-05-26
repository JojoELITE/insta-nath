import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

const SignOut = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');       

  const handleSignOut = async () => {
    setLoading(true);
    setError('');
    try {
      await signOut(auth);
      navigate('/login');  
    } catch (error) {
      console.error('Error signing out: ', error);
      setError('Failed to sign out.');  
      setLoading(false);  
    }
  };

  return (
    <div>
      {error && <p className="text-red-600">{error}</p>}
      <button 
        onClick={handleSignOut} 
        className={`bg-red-500 hover:bg-red-700 mt-3  text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}  
      >
        {loading ? 'Signing Out...' : 'Se déconnecter'}
      </button>
    </div>
  );
};

export default SignOut;
