import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

function ImageUploadForm({ onAddImage }) {
  const { mutate } = useSWR("/api/images");

  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState(undefined);

  async function submitImage(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.status === 201) {
        setTimeout(() => mutate(), 500);

        setUploadStatus("Upload complete!");
      }
      const image = await response.json();

      const newImage = {
        id: image.public_id,
        image: image.secure_url,
        theme: data.theme,
        description: data.description,
        username: data.username,
        isCloudinaryImage: true,
      };

      onAddImage(newImage);

      event.target.reset();
      setTimeout(() => {
        setUploadStatus("");
      }, 3000);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <Form onSubmit={submitImage}>
        <StyledHeading>Image Upload</StyledHeading>
        <label htmlFor="file" />
        <StyledFileInput
          type="file"
          name="file"
          aria-label="file upload"
          required
        />
        <label htmlFor="username" />
        <StyledInput
          type="text"
          name="username"
          placeholder="username"
          aria-label="username"
          required
        />
        <label htmlFor="theme" />
        <StyledInput
          type="text"
          name="theme"
          placeholder="theme / title"
          aria-label="theme or title"
          required
        />
        <label htmlFor="description" />
        <StyledDescription
          type="textarea"
          name="description"
          placeholder="description"
          aria-label="description"
          rows="3"
          required
        />
        <StyledButton type="submit">
          {/* <FontAwesomeIcon
            icon={faPlus}
            width={15}
            height={15}
            style={{ position: "static", fontWeight: "bold" }}
          />
          {"  "} */}
          Upload
        </StyledButton>
        <p>{uploadStatus}</p>
        {error && <p>{error.message}</p>}
      </Form>
    </>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: -1rem -1rem;
`;

const StyledHeading = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
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
  margin-top: 1.5rem;
  align-self: center;
  text-align: center;
  color: var(--font-color);
  cursor: pointer;
  &:hover {
    background-color: var(--violette-color);
    color: white;
  }
`;

const StyledInput = styled.input`
  border: 1px solid var(--form-color);
  padding: 6px;
  margin-bottom: 1rem;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledDescription = styled.textarea`
  border: 1px solid var(--form-color);
  border-radius: 3px;
  resize: vertical;
  max-height: 600px;
  padding: 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledFileInput = styled.input`
  margin-left: -1rem;
  padding: 1rem;
`;

export default ImageUploadForm;
