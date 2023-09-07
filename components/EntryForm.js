import { uid } from "uid";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";

export default function EntryForm({ onAddEntry, routerId }) {
  function handleSubmitEntry(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const date = new Date().toLocaleDateString("en-gb", {
      dateStyle: "medium",
    });

    const newEntry = {
      id: uid(),
      picid: routerId,
      date: date,
      title: data.title,
      comment: data.comment,
    };

    onAddEntry(newEntry);

    event.target.reset();
    event.target.elements.title.focus();
  }

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmitEntry}>
        <StyledHeading>New Entry</StyledHeading>
        <StyledDivTitle>
          <StyledLabel htmlFor="title">Title</StyledLabel>
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
          <StyledLabel htmlFor="comment">Comment</StyledLabel>
          <StyledTextarea
            type="text"
            id="comment"
            name="comment"
            maxLength="480"
            rows={3}
            placeholder="Remember, be nice!"
            required
          ></StyledTextarea>
        </StyledDivComment>
        <div>
          <StyledButton type="submit">
            <FontAwesomeIcon
              icon={faPaintbrush}
              width={15}
              height={15}
              style={{ position: "static" }}
            />
            {"  "}create
          </StyledButton>
        </div>
      </StyledForm>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--form-color);
  border-radius: 8px;
  padding: 2rem;
`;

const StyledHeading = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDivTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  width: 100%;
  padding-left: 0.2rem;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0.5rem;
`;

const StyledDivComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  width: 100%;
  padding-left: 0.2rem;
`;

const StyledInputTitle = styled.input`
  border: 1px solid var(--form-color);
  border-radius: 4px;
  resize: none;
  padding: 8px 20px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledTextarea = styled.textarea`
  border: 1px solid var(--form-color);
  border-radius: 4px;
  resize: vertical;
  max-height: 600px;
  padding: 25px 20px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: var(--border-color);
  border-radius: 8px;
  border: none;
  text-transform: uppercase;
  font-size: medium;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: var(--font-color);
  &:hover {
    background-color: var(--violette-color);
    color: white;
  }
`;
