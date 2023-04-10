import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date("June 1, 2023 18:30:00").getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h4 className="text-center theme-gradient">The Conference starts in</h4>
      <div className="d-flex countdown">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInDown"
          animateOnce={true}
          className="col-3"
        >
          <h4 className="text-center">{countdown.days}</h4>
          <p className="text-center mb-0">Days</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInDown"
          delay={300}
          animateOnce={true}
          className="col-3"
        >
          <h4 className="text-center">{countdown.hours}</h4>
          <p className="text-center mb-0">Hours</p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInDown"
          delay={600}
          animateOnce={true}
          className="col-3"
        >
          <h4 className="text-center">{countdown.minutes}</h4>
          <p className="text-center mb-0">Minutes</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeInDown"
          delay={900}
          animateOnce={true}
          className="col-3"
        >
          <h4 className="text-center">{countdown.seconds}</h4>
          <p className="text-center mb-0">Seconds</p>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Countdown;
