import React, { useState, useEffect } from "react";
import "../stylesheets/calendarStyle.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute


    return () => clearInterval(interval);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = currentDate.getDate();

  const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [
    ...Array(firstDayOfMonth).fill(""), // Empty slots for alignment
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1), // Actual days
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  return (
    <div id="calendar" className="calendar">
      <div className="calendar-container">
        <div className="calendar-header">{monthNames[month]} {year}</div>

        <div className="calendar-grid">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="day-label">{day}</div>
          ))}
          {daysArray.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day === today ? "today" : "other-days"}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
