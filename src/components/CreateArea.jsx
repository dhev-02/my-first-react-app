import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={props.newNoteHeading}
          onChange={props.onType}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.newNoteContent}
          onChange={props.onType}
        />
        <button onClick={props.onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
