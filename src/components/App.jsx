import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import DailyCard from "./DailyCard";
import WeeklyCard from "./WeeklyCard";
import MonthlyCard from "./MonthlyCard";
import getSvg from "../getSvg";

function App() {
  const [active, setActive] = useState({
    daily: false,
    weekly: true,
    monthly: false,
  });

  const { daily, weekly, monthly } = active;

  const handleClick = (period) => {
    setActive(() => {
      const newState = { ...active };
      Object.keys(newState).forEach((items) => {
        newState[items] = false;
        newState[period] = true;
      });
      return newState;
    });
  };

  return (
    <>
      <Header
        handleClick={handleClick}
        daily={daily}
        weekly={weekly}
        monthly={monthly}
      />
      <main>
        {daily ? <DailyCard getSvg={getSvg} /> : null}
        {weekly ? <WeeklyCard getSvg={getSvg} /> : null}
        {monthly ? <MonthlyCard getSvg={getSvg} /> : null}
      </main>
    </>
  );
}

export default App;
