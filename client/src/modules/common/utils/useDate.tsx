import { useEffect, useRef, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState(() => new Date());
  const lastMinuteRef = useRef<number>(new Date().getMinutes());

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const minute = now.getMinutes();

      if (lastMinuteRef.current === minute) return; 

      lastMinuteRef.current = minute;
      setDate(now);
    };

    update(); 

    const interval = setInterval(update, 1000); 

    return () => clearInterval(interval);
  }, []);

  return { date };
};