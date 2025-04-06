
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  onComplete 
}) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      if (onComplete) onComplete();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);
      
      if (updatedTimeLeft.days === 0 && 
          updatedTimeLeft.hours === 0 && 
          updatedTimeLeft.minutes === 0 && 
          updatedTimeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="flex space-x-2 sm:space-x-3">
      <div className="flex flex-col items-center">
        <div className="bg-volt-black text-white font-bold text-sm sm:text-xl rounded px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] text-center">
          {addLeadingZero(timeLeft.days)}
        </div>
        <span className="text-xs mt-1">Days</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-volt-black text-white font-bold text-sm sm:text-xl rounded px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] text-center">
          {addLeadingZero(timeLeft.hours)}
        </div>
        <span className="text-xs mt-1">Hours</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-volt-black text-white font-bold text-sm sm:text-xl rounded px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] text-center">
          {addLeadingZero(timeLeft.minutes)}
        </div>
        <span className="text-xs mt-1">Mins</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-volt-black text-white font-bold text-sm sm:text-xl rounded px-2 py-1 sm:px-3 sm:py-2 min-w-[40px] text-center">
          {addLeadingZero(timeLeft.seconds)}
        </div>
        <span className="text-xs mt-1">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
