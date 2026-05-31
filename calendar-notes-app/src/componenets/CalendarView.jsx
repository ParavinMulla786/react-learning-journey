import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({
  date,
  setDate,
  notes,
}) {
  return (
    <Calendar
      onChange={setDate}
      value={date}
      tileContent={({ date, view }) => {
        if (view === "month") {
          const hasNote =
            notes[date.toDateString()];

          return hasNote ? (
            <div className="note-dot"></div>
          ) : null;
        }
      }}
    />
  );
}

export default CalendarView;