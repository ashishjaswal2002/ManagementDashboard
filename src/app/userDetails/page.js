'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import getUsersDetails from '../../../lib/getUserDetails';

export default function UserDetails() {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUsersDetails();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); 

  const checkfilteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  const generateReport = () => {
    
    console.log(`Generating report for user: ${selectedUser.username}`);
   
  };

  return (

    <>
    <section className='p-8 bg-gray-200 dark:bg-gray-800 min-h-screen  '>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4'>User Details</h1>
      <div className='w-full max-w-sm mx-auto'>
     
        <div className='relative'>
        <svg
            className=" absolute inset-y-0 left-0 flex items-center pl-3 h-full text-gray-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>

      <input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Search by username"
        className="border border-gray-300 dark:border-gray-700 rounded-md p-2 pl-10 focus:outline-none focus:border-blue-500 w-full dark:bg-gray-700 dark:text-white"
        />
        </div>
        </div>
        <div className="mt-8">
        <div className="overflow-x-auto rounded">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  ID
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  Username
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
             
              {checkfilteredUsers.map((result) => (
            <tr key={result.id} onClick={() => handleUserClick(result)}>
              <td className='px-4 py-3 border-gray-300 dark:border-gray-700'>{result.id}</td>
              <td className='px-4 py-3 border-gray-300 dark:border-gray-700'>{result.username}</td>
              <td className='px-4 py-3 border-gray-300 dark:border-gray-700'>{result.email}</td>
              <td className='px-4 py-3 border-gray-300 dark:border-gray-700'>{result.phone}</td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
      </div>


     

      {selectedUser && (
        <>
      Name
          
        
       
            <div class="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg w-full max-w-md mx-auto p-4 shadow-lg">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold">User Details</h2>
        <button className="inline-flex items-center bg-red-500 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10" onClick={handleCloseModal}>
       <span className='text-[1.5rem] text-white'>
        &times;

        </span>
          
        </button>
      </div>


      <div className="mt-4 space-y-2">
        <div>
          <span className="font-medium">User ID: </span>
          <span>{selectedUser.id}</span>
        </div>
        <div>
          <span className="font-medium">Username: </span>
          <span>{selectedUser.username}</span>
        </div>
        <div>
          <span className="font-medium">Email: </span>
          <span>{selectedUser.email}</span>
        </div>
        <div>
          <span className="font-medium">Phone: </span>
          <span>{selectedUser.phone}</span>
        </div>
      </div>



      <div className="mt-4">
        <button className="bg-slate-600 text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Generate Report
        </button>
      </div>
    </div>
  </div>
</div>
  <h1>
    
  </h1>

      </>
      )}
  

     
    <Link href='/accountCreation' className='relative top-2 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-700 duration-300 '> Go to Account Creation</Link>
    </section>
        </>
  );
}
