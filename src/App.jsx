import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example using callback
    // console.log("halo 1")
    // fetchDataWithCallback((result) => {
    //   console.log("halo 2");
    //   console.log("Callback:", result);
    // });
    // console.log("halo 3")

    // Example using promise
    console.log("halo 1");
    fetchDataWithPromise().then((result) => {
      console.log("halo 2");
      console.log("Promise:", result);
    });
    console.log("halo 3");

    // Example using async/await
    // async function fetchData() {
    //   const result = await fetchDataWithAsyncAwait();
    //   console.log("Async/Await:", result);
    //   setData(result);
    // }
    // fetchData();
  }, []);

  // Callback example
  function fetchDataWithCallback(callback) {
    setTimeout(() => {
      callback("Data from callback");
    }, 2000);
  }

  // Promise example
  function fetchDataWithPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from promise");
      }, 2000);
    });
  }

  // Async/Await example
  async function fetchDataWithAsyncAwait() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from async/await");
      }, 1000);
    });
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Data: {data}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
