import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetNumbers = [1000, 2500, 500, 67];
  const texts = [
    'Years of Experienced',
    'Project Done',
    'Licensed Architect',
    'Happy Customers'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => prevCounts.map((count, index) => {
        if (count >= targetNumbers[index]) {
          clearInterval(interval); // Stop the interval when count reaches the target
          return targetNumbers[index]; // Return the target number
        } else {
          return count + 1; // Increment the count
        }
      }));
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [targetNumbers]); // Include targetNumbers in the dependency array

  return (
    <section className="py-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {counts.map((count, index) => (
          <div key={index} className="flex-1 p-4 text-center">
            <div className="py-5">
              <div className="flex items-center justify-center">
                <strong className="text-4xl text-green-400 border-r-2 pr-6">{count}</strong>
                <span className="ml-5 text-lg">{texts[index]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
