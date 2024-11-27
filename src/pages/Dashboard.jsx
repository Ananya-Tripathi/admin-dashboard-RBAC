// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [roleCount, setRoleCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const usersSnapshot = await getDocs(collection(db, 'users'));
      const rolesSnapshot = await getDocs(collection(db, 'roles'));
      setUserCount(usersSnapshot.size);
      setRoleCount(rolesSnapshot.size);
    };
    fetchCounts();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg">Total Users</h3>
          <p className="text-3xl">{userCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-lg">Total Roles</h3>
          <p className="text-3xl">{roleCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
