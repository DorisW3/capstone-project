import { useState } from "react";
import { uid } from "uid";

export default function EntryForm({ onAddEntry, title, comment }) {
  function handleSubmitEntry(event) {
    event.preventDefault();

    const date = new Date().toLocaleDateString("en-gb", {
      dateStyle: "medium",
    });

    const newEntry = {
      id: uid(),
      date: date,
      title: title,
      comment: comment,
    };

    onAddEntry(newEntry);
    console.log(newEntry);

    event.target.reset();
    event.target.elements.title.focus();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmitEntry}>
      <h2 className="h2">New Entry</h2>
      <div className="title__container">
        <label htmlFor="title">Title</label>
        <input
          className="title"
          type="text"
          maxLength="50"
          rows="2"
          id="title"
          required
        ></input>
      </div>
      <div className="comment__container">
        <label htmlFor="comment">Comment</label>
        <textarea
          className="comment"
          type="text"
          id="comment"
          maxLength="480"
          required
        ></textarea>
      </div>
      <div className="button__container">
        <button className="button" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
