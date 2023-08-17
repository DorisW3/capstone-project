import "./form.css";
import { uid } from "uid";

export default function CommentForm({ onAddEntry }) {
  function handleSubmitComment(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    const newEntry = {
      id: uid(),
      title: data.title,
      comment: data.comment,
      date: date,
    };

    onAddEntry(newEntry);
    event.target.reset();
    event.target.elements.motto.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmitComment}>
      <h2 className="h2">new entry</h2>
      <div className="title__container">
        <label htmlFor="title">title</label>
        <input
          className="title"
          type="text"
          maxlength="50"
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
          maxlength="480"
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
