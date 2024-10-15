import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Function to convert 24-hour time to 12-hour format
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  // Function to add leading zero to single-digit minutes or seconds
  const formatTimeWithLeading = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  // Function to format the date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-teal-600 text-white">
        <h1 className="text-5xl font-bold mb-6 border-b-4">Digital Clock</h1>
        <div className="text-6xl font-mono mb-2">
          {formatTimeWithLeading(formatHour(currentTime.getHours()))}:{formatTimeWithLeading(currentTime.getMinutes())}:{formatTimeWithLeading(currentTime.getSeconds())}           {currentTime.getHours() >= 12 ? ' PM' : ' AM'}
        
        

        </div>
        <div className="text-2xl mt-6">{formatDate(currentTime)}</div>
      </div>
    </>
  );
}

export default App;
