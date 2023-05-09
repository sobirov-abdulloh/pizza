import { useEffect, useState } from "react";
import "./Time.css"
const useCountdown = (onDone, initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [timeout, _setTimeout] = useState();
  const [render, rerender] = useState();

  const countDown = () => {
    setSeconds((prev) => prev - 1);
  };

  const runTimer = () => {
    if (seconds === 0) {
      return onDone();
    }

    const timer = setTimeout(() => {
      countDown();
    }, 990);
    _setTimeout(timer);
  };


  useEffect(() => {
    runTimer();
  }, [seconds, render]);

  return { seconds };
};

export default function Time({setOpen2 ,setOpen}) {
  const [dis, setDis] = useState(true);
  const onDone = () => setDis(false);
  const { seconds} = useCountdown(onDone, 120);
  const reset = () => {
   setOpen2(false)
   setOpen(true)
  };


  return (
    <div className="time">
      {dis ?  <h1> {seconds} секунд</h1> : <button onClick={reset}>Отправить</button>}
    </div>
  );
}
