"use client";
import { useState } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  const [customTime, setCustomTime] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTime(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mt-8 space-x-4">
        <Link href="/timer/25">
          <div className=" px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            25 Minutes Timer
          </div>
        </Link>
        <Link href="/timer/10">
          <div className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            10 Minutes Timer
          </div>
        </Link>
      </div>
      <div className="mt-8">
        <input
          type="number"
          className="px-2 py-2 border rounded mr-2"
          placeholder="Enter minutes"
          value={customTime}
          onChange={handleInputChange}
        />
        <Link href={`/timer/${customTime}`}>
          <div className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
            Start Custom Timer
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
