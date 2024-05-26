import React from 'react';
import Navbar from './Components/Common/Navbar';
import PostList from './Components/Post/PostList';

const Home = () => {
  return (
    <div>
      <div className='min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 animate-gradient-x'>
        <Navbar  />
        <main className="mx-auto sm:w-full md:w-[20%] lg:w-[20%] ">
            <PostList />            
        </main>
      </div>
    </div>
  );
};

export default Home;
