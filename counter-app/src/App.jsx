import React, { useContext } from "react";
// import "./App.css";

// const withLogger = (WrappedComponent) => {
//   return (props) => {
//     console.log("Logging props:", props);
//     return <WrappedComponent {...props} />;
//   };
// };

// // Simple Component
// // Apply the HOC

// function App({ name }) {
//   const [counterVal, setCounterVal] = useState(0);
//   const [initialCount, setInitialCount] = useState(0);
//   const handleChange = () => {
//     const calculatePrimes = (num) => {
//       const primes = [];

//       for (let i = 2; primes.length < num; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//           if (i % j === 0) {
//             isPrime = false;
//             break;
//           }
//         }
//         if (isPrime) {
//           primes.push(i);
//         }
//       }
//       return primes;
//     };
//     calculatePrimes(9000);
//     setCounterVal(counterVal + parseInt(initialCount));
//   };
//   return (
//     <>
//       <div className="App">
//         <div>{name}</div>
//         <input
//           value={initialCount}
//           onChange={(e) => setInitialCount(e.target.value)}
//           type="number"
//         />
//         <div className="counter-wrap">
//           <button
//             className="dec"
//             onClick={() => setCounterVal(counterVal - initialCount.valueOf())}
//           >
//             -
//           </button>
//           <h2>{counterVal}</h2>
//           <button className="inc" onClick={() => handleChange()}>
//             +
//           </button>
//         </div>
//         <button onClick={() => setCounterVal(0)}>Reset</button>
//       </div>
//     </>
//   );
// }

// //HOC - Higher order component - React / HOF - Higher order function - function takes fucntion as input and return new function - wrapper

// // map,
// const MyComponentWithLogger = withLogger(App);

// export default MyComponentWithLogger;
// import "./App.css";
// import "./ToDo.css";
// import "./Common.css";
// import ToDoList from "./ToDoList";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export const ComponentContext = React.createContext("Hello");

export const NewCOntext = React.createContext("Bye");
function App() {
  return (
    <div className="App">
      <ComponentContext.Provider value={"Hello"}>
        <NewCOntext.Provider value={"Goodbye"}>
          {/* <ComponentA /> */}
          <ComponentB />
        </NewCOntext.Provider>
      </ComponentContext.Provider>
    </div>
  );
}

export default App;
