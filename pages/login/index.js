import Image from "next/image";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <StyledSection>
      <Image
        src="/appLogo2.0.png"
        alt="app-logo"
        width={300}
        height={300}
        priority={true}
      />
      <StyledForm>
        <StyledLabel htmlFor="username"></StyledLabel>
        <StyledInputTitle
          type="text"
          maxLength="15"
          minLength="3"
          id="username"
          name="username"
          placeholder="username"
          required
        ></StyledInputTitle>
        <StyledLabel htmlFor="password"></StyledLabel>
        <StyledInputTitle
          type="text"
          maxLength="40"
          minLength="8"
          id="password"
          name="password"
          placeholder="password"
          required
        ></StyledInputTitle>
        <StyledButton type="submit">
          <Image src="/submit.png" alt="submit" width={100} height={35} />
        </StyledButton>
      </StyledForm>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: auto;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  padding: 2rem;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0.5rem;
`;
const StyledInputTitle = styled.input`
  border: 1px solid var(--form-color);
  border-radius: 4px;
  resize: none;
  padding: 12px 20px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  padding: 2rem;
`;

const StyledButton = styled.button`
  align-self: center;
  cursor: pointer;
  border: none;
  margin-top: 1.5rem;
  background-color: transparent;
  width: 100px;
  /* &:hover {
    background-color: var(--border-color);
  } */
`;
