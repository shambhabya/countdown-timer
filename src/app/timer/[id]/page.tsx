"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface CountdownTimerProps {
  params: { id: string };
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ params }) => {
  const id = params.id;

  const initialTime = parseInt(id, 10) * 60 || 25 * 60; // Fallback to 25 minutes
  const [time, setTime] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearTimeout(timer);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(initialTime);
  };

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-6xl font-bold mb-4">{formatTime(time)}</div>
      <div className="space-x-4">
        {!isActive && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={startTimer}
          >
            {isPaused ? "Resume" : "Start"}
          </button>
        )}
        {isActive && (
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded"
            onClick={pauseTimer}
          >
            Pause
          </button>
        )}
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
