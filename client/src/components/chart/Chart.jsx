import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const ChartComponent = () => {
  const chartRef = useRef(null);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get('http://localhost:8089/api/users');
        const users = response.data;
        // Extract createdAt values from users
        const createdAtValues = users.map((user) => user.createdAt);
        setUsersData(createdAtValues);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsersData();
  }, []);

  useEffect(() => {
    let myChart = null;

    if (chartRef.current && usersData.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: usersData.map((createdAt, index) => `User ${index + 1}`),
          datasets: [{
            label: 'Users',
            data: usersData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [usersData]);

  return (
    <div className="chart">
      <h3 className="chartTitle">User Creation Timeline</h3>
      <canvas ref={chartRef} width="400" height="100"></canvas>
    </div>
  );
};

export default ChartComponent;
