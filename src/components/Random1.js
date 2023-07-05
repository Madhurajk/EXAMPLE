import {useEffect, useState} from 'react';

const Random1 = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(randomNumberInRange(1, 100));
    }, 5000); // 👈️ runs every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Bookings made today :  {num}</h1>
    </div>
  );
};

export default Random1;
