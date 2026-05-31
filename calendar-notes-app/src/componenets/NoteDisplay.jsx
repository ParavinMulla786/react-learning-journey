function NoteDisplay({ date, notes }) {
  return (
    <div className="note-display">
      <h2>{date.toDateString()}</h2>

      <h3>Saved Note:</h3>

      <p>
        {notes[date.toDateString()]
          ? notes[date.toDateString()]
          : "No Note Found"}
      </p>
    </div>
  );
}

export default NoteDisplay;