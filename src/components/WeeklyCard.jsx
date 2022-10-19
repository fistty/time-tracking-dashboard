import React from "react";
import data from "../data.json";

function WeeklyCard({ getSvg }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.title}
            className={
              "time-card " + item.title.split(" ").join("-").toLowerCase()
            }>
            <img
              className="card-svg"
              src={getSvg(item.title)}
              alt={item.title}
            />
            <div className="info-container">
              <div className="title-container">
                <p>{item.title}</p>
                <svg className="elipsis" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeframe-container">
                <p className="timeframe-curr">
                  {item.timeframes.weekly.current}hrs
                </p>
                <p className="timeframe-prev">
                  Last Week - {item.timeframes.weekly.previous}hrs
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WeeklyCard;
