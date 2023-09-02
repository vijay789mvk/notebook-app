import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const [error, setError] = useState("");

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
      setError(""); 
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length === 0) {
      setError("Please enter a note"); 
    } else if (noteText.length > characterLimit) {
      setError("Note exceeds character limit"); 
    } else {
      handleAddNote(noteText);
      setNoteText("");
      setError(""); 
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>
          {characterLimit - noteText.length} Remaining
        </small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
      {error && <div className="error">{error}</div>} {}
    </div>
  );
};

export default AddNote;
