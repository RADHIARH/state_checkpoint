import React, { useState, useEffect } from 'react';

const Interval = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
 return (
    <div className="remote" style={{marginTop:"30px"}}>
      <h6 className="App-header" style={{color:"red"}}>
        {time} secondes sont passées  dés que le composant est remonté
      </h6>
    </div>
  );
};
export default Interval;