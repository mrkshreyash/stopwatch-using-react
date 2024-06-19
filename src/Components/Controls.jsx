import "./controls.css";

function Controls({ startStop, isRunning, reset}) {
  return (
    <>
      <section className="controls">
        <button className="reset" onClick={reset}>RESET</button>
        <button
          className={`start-stop ${isRunning ? "red" : ""}`}
          onClick={startStop}
        >
          {isRunning ? "STOP" : "START"}
        </button>
      </section>
    </>
  );
}

export default Controls;
