"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState(null); 
  const uri = process.env.NEXT_PUBLIC_BASE_BACKEND_URI;

  if (!uri) {
    console.log("No NEXT_PUBLIC_BASE_BACKEND_URI environment variable found.");
  } else {
    console.log("Using BASE_BACKEND_URI:", uri);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`${uri}/health/health-check`);
      console.log("API Response:", response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">Health Check</h1>
      {data ? (
        <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
      <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={fetchData}>
        Fetch Health Check
      </button>
    </div>
  );
}
