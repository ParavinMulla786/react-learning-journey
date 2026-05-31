import { useState, useEffect } from "react";
import "./App.css";

import CalendarView from "./componenets/CalendarView";
import NoteForm from "./componenets/NoteForm";
import NoteDisplay from "./componenets/NoteDisplay";

function App() {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState({});

  // Load notes from localStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // 🔥 Load note when date changes (IMPORTANT FIX)
  useEffect(() => {
    const key = date.toDateString();

    if (notes[key]) {
      setNote(notes[key]);
    } else {
      setNote("");
    }
  }, [date, notes]);

 const saveNote = () => {
  const key = date.toDateString();

  if (notes[key]) {
    alert("Note already exists! Use Update.");
    return;
  }

  setNotes({
    ...notes,
    [key]: note,
  });

  setNote("");
};
  // Update note (edit existing)
  const updateNote = () => {
  const key = date.toDateString();

  if (!notes[key]) {
    alert("No note found to update!");
    return;
  }

  setNotes({
    ...notes,
    [key]: note,
  });
};
  // Delete note
  const deleteNote = () => {
    const key = date.toDateString();

    const updatedNotes = { ...notes };
    delete updatedNotes[key];

    setNotes(updatedNotes);
    setNote("");
  };

  return (
    <div className="app-container">
      <h1 className="heading">Task Calendar App</h1>

      <div className="calendar-container">
        <CalendarView
          date={date}
          setDate={setDate}
          notes={notes}
        />
      </div>

      <NoteForm
        note={note}
        setNote={setNote}
        saveNote={saveNote}
        updateNote={updateNote}
        deleteNote={deleteNote}
      />

      <NoteDisplay
        date={date}
        notes={notes}
      />
    </div>
  );
}

export default App;