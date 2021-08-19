import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({});

  function onType(e) {
    var [name, value] = [e.target.name, e.target.value];
    setNewNote({ ...newNote, [name]: value });
  }

  function onAdd(e) {
    setNotes([...notes, newNote]);
    setNewNote({ title: "", content: "" });
    e.preventDefault();
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        newNoteHeading={newNote.title}
        newNoteContent={newNote.content}
        onType={onType}
        onAdd={onAdd}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
