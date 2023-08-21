import { uid } from "uid";
import styled from "styled-components";

export default function EntryForm({ onAddEntry }) {
  function handleSubmitEntry(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const date = new Date().toLocaleDateString("en-gb", {
      dateStyle: "medium",
    });

    const newEntry = {
      id: uid(),
      date: date,
      title: data.title,
      comment: data.comment,
    };

    onAddEntry(newEntry);

    event.target.reset();
    event.target.elements.title.focus();
  }

  return (
    <StyledForm onSubmit={handleSubmitEntry}>
      <StyledHeading>New Entry</StyledHeading>
      <StyledDivTitle>
        <label htmlFor="title">Title</label>
        <StyledInputTitle
          type="text"
          maxLength="50"
          rows="2"
          id="title"
          name="title"
          required
        ></StyledInputTitle>
      </StyledDivTitle>
      <StyledDivComment>
        <label htmlFor="comment">Comment</label>
        <StyledTextarea
          type="text"
          id="comment"
          name="comment"
          maxLength="480"
          required
        ></StyledTextarea>
      </StyledDivComment>
      <div>
        <StyledButton type="submit">Create</StyledButton>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid slategray;
  border-radius: 4px;
  padding: 2rem;
`;

const StyledHeading = styled.h2`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  width: 90%;
  padding-left: 3rem;
`;

const StyledDivComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  width: 90%;
  padding-left: 3rem;
`;

const StyledInputTitle = styled.input`
  border: 1px solid slategray;
  border-radius: 4px;
  resize: none;
  padding: 8px 20px;
`;

const StyledTextarea = styled.textarea`
  border: 1px solid slategray;
  border-radius: 4px;
  resize: none;
  padding: 25px 20px;
`;

const StyledButton = styled.button`
  background-color: slateblue;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
`;
