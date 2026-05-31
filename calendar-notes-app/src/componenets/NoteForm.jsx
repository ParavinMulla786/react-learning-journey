function NoteForm({ note, setNote, saveNote, deleteNote, updateNote }) {
  return (
    <div className="note-form">
      <textarea
        rows="4"
        placeholder="Write note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <div className="button-group">
        <button className="save-btn" onClick={saveNote}>
          Save Note
        </button>

        <button className="update-btn" onClick={updateNote}>
          Update Note
        </button>

        <button className="delete-btn" onClick={deleteNote}>
          Delete Note
        </button>
      </div>
    </div>
  );
}

export default NoteForm;