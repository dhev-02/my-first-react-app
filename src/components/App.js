import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((newNote) => {
        return (
          <Note
            key={newNote.key}
            title={newNote.title}
            content={newNote.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
