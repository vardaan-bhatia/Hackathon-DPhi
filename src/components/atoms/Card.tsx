import React from "react";

interface CardProps {
  title: string;
  description: string;
  status: "Upcoming" | "Active";
  time: { days: number; hours: number; minutes: number };
  image: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  status,
  time,
  image,
  buttonText,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <div className="card-status">
          <span className={`status ${status.toLowerCase()}`}>{status}</span>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-time">
          <span>
            {time.days} <span className="time-unit">Days</span>
          </span>
          <span>
            {time.hours} <span className="time-unit">Hours</span>
          </span>
          <span>
            {time.minutes} <span className="time-unit">Mins</span>
          </span>
        </div>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
