import { useState, useEffect } from "react";
import "./App.css";
import Display from "./Components/Display.jsx";
import Controls from "./Components/Controls.jsx";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStartstop() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setTime(0);
  }

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [time, isRunning]);

  return (
    <>
      <section className="stopwatch">
        <h1>React Stopwatch</h1>
        <Display time={time} />
        <Controls
          startStop={handleStartstop}
          isRunning={isRunning}
          reset={handleReset}
        />
      </section>

      <p>{isRunning ? "Running" : "Stopped"}</p>
    </>
  );
}

export default App;
