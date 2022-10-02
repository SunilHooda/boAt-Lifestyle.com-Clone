import { useEffect, useState } from "react";

export function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-10-10T23:59:59+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60) / 24),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        border: "1px solid white",
        width: "300px",
        height: "40px",
        backgroundColor: "#fcc50b",
        padding: "0,10px",
        borderRadius: "10px",
        fontSize: "1.2rem",
        marginLeft: "50px",
        marginBottom: "30px",
      }}
    >
      <img
        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/thunder_2.png?v=1655103798"
        alt="logo"
      />

      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <h1>
          Ending In: {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m
          : {timeLeft.seconds}s
        </h1>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </div>
  );
}
