import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
      event.target.elements.title.focus();
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <StyledHeading>Image Upload</StyledHeading>
      <Form onSubmit={submitImage}>
        <label htmlFor="file">
          <StyledFileInput type="file" name="file" aria-label="file upload" />
        </label>
        <StyledInput
          type="text"
          name="username"
          placeholder="username"
          aria-label="username"
        />
        <StyledInput
          type="text"
          name="theme"
          placeholder="theme / title"
          aria-label="theme or title"
        />
        <StyledDescription
          type="textarea"
          name="description"
          placeholder="description"
          aria-label="description"
          rows="3"
        />
        <StyledButton type="submit">
          <FontAwesomeIcon
            icon={faPlus}
            width={15}
            height={15}
            style={{ position: "static", fontWeight: "bold" }}
          />
          {"  "}Upload
        </StyledButton>
        <p>{uploadStatus}</p>
        {/*we use conditional rendering */}
        {error && <p>{error.message}</p>}
      </Form>
    </>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

const StyledHeading = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  border-radius: 8px;
  padding: 0.15rem;
  margin: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledDescription = styled.textarea`
  border: 1px solid var(--form-color);
  border-radius: 8px;
  resize: vertical;
  max-height: 600px;
  padding: 25px 20px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.05rem var(--violette-color);
  }
`;

const StyledFileInput = styled.input`
  padding: 0.15rem;
  margin: 0.5rem;
  background-color: var(--background-color);
  padding: 22px;
  border-radius: 16px;
  &:hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }
`;

export default ImageUploadForm;