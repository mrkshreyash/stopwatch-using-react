import "./display.css";

function Display({ time }) {
  function formatTime(timeInSeconds) {
    const hour = Math.floor(timeInSeconds / 3600);

    const minute = Math.floor((timeInSeconds % 3600) / 60);

    const seconds = timeInSeconds % 60;

    return { hour, minute, seconds };
  }
  return (
    <>
      <section className="display">
        <div className="hours">
          <span className="number">
            {String(formatTime(time).hour).padStart(2, 0)}
          </span>
          <label htmlFor="">Hour</label>
        </div>
        <span>:</span>
        <div className="minutes">
          <span className="number">
            {String(formatTime(time).minute).padStart(2, 0)}
          </span>
          <label htmlFor="">Minutes</label>
        </div>
        <span>:</span>
        <div className="seconds">
          <span className="number">
            {String(formatTime(time).seconds).padStart(2, 0)}
          </span>
          <label htmlFor="">Seconds</label>
        </div>
      </section>
    </>
  );
}

export default Display;
