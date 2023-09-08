import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const router = useRouter();

  function handleSubmitLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const dummyUser = {
      username: data.username,
      password: data.password,
    };

    console.log(data);

    const admin = {
      username: "dolorisi",
      password: "firstApp09.23",
    };

    console.log(admin);

    if (admin.username !== dummyUser.username) {
      setIsLoggedIn(false);
      return "invalid username";
    }

    if (admin.password !== dummyUser.password) {
      setIsLoggedIn(false);
      return "invalid password";
    } else {
      setIsLoggedIn(true);
    }

    event.target.reset();
    event.target.elements.username.focus();
  }

  return (
    <StyledSection>
      <Image
        src="/appLogo3.0.png"
        alt="app-logo"
        width={375}
        height={375}
        priority={true}
      />
      <StyledForm onSubmit={handleSubmitLogin}>
        <div>
          <StyledLabel htmlFor="username"></StyledLabel>
          <StyledInput
            type="text"
            maxLength="15"
            minLength="3"
            id="username"
            name="username"
            placeholder="username"
            required
          />
        </div>
        <div>
          <StyledLabel htmlFor="password"></StyledLabel>
          <StyledInput
            type="text"
            maxLength="40"
            minLength="8"
            id="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <StyledButton type="submit">
          <Image src="/submit.png" alt="submit" width={100} height={35} />
          {isLoggedIn === true ? (
            <p>Logged in successfully!</p>
          ) : isLoggedIn === false ? (
            <p>Login failed</p>
          ) : (
            <p>{""}</p>
          )}
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
  min-width: 400px;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  padding: 4rem;
  margin: 4rem 2rem;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  margin: 0.5rem 0.5rem;
`;
const StyledInput = styled.input`
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
  width: 120%;
  display: flex;
  flex-direction: column;
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