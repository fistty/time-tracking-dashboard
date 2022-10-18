import React from "react";
import profileImage from "../images/image-jeremy.png";

function Header({
  handleClick,
  handleDaily,
  handleWeekly,
  handleMonthly,
  daily,
  weekly,
  monthly,
}) {
  return (
    <header>
      <div className="profile-container">
        <div className="profile-img-container">
          <img src={profileImage} alt="DP" />
        </div>
        <div className="profile-text-container">
          <p className="profile-p">Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="period-container">
        <button
          onClick={() => handleClick("daily")}
          className={daily ? "active" : ""}>
          Daily
        </button>
        <button
          onClick={() => handleClick("weekly")}
          className={weekly ? "active" : ""}>
          Weekly
        </button>
        <button
          onClick={() => handleClick("monthly")}
          className={monthly ? "active" : ""}>
          Monthly
        </button>
      </div>
    </header>
  );
}

export default Header;
