import React, { useState, useEffect } from "react";

const ChildComponent = ({ name, handleClick, isClicked, id }) => {
  console.log("rendering - ", name);

  const calculatePrimes = (num) => {
    const primes = [];

    for (let i = 2; primes.length < num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    return primes;
  };

  const primeNumbers = calculatePrimes(5);

  return (
    <div
      style={{
        backgroundColor: isClicked ? "green" : "#f9f9f9",
        border: "1px solid black",
        padding: "5px",
        margin: "5px",
        cursor: "pointer",
      }}
      onClick={() => handleClick(id)}
    >
      <h2 className="name">{name}</h2>
      <div>
        <ul>
          {primeNumbers.map((prime) => (
            <li style={{ listStyle: "none" }} key={prime}>
              {prime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChildComponent;
