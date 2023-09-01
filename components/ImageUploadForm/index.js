import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";

function ImageUploadForm() {
  const { mutate } = useSWR("/api/images/");

  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState(undefined);

  async function submitImage(event) {
    event.preventDefault();
    setUploadStatus("Uploading...");
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });

      if (response.status === 201) {
        mutate();

        setUploadStatus("Upload complete!");
      }
    } catch (error) {
      setError(error);
    }
  }

  function submitUploadImage(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newImage = {
      id: image.public_id,
      image: `/images/${image.public_id}`,
      theme: data.theme,
      description: data.description,
      username: data.username,
      isCloudinaryImage: true,
    };

    onAddImage(newImage);

    console.log(newImage, "test");

    event.target.reset();
    event.target.elements.title.focus();
  }

  return (
    <>
      <h2>Image Upload</h2>
      <Form onSubmit={submitImage || submitUploadImage}>
        <StyledFileLabel htmlFor="file">
          <StyledFileInput type="file" name="file" aria-label="file upload" />
        </StyledFileLabel>
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
        <StyledInput
          type="text"
          name="description"
          placeholder="description"
          aria-label="description"
          rows="5"
        />
        <StyledButton type="submit">Upload</StyledButton>
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

const StyledButton = styled.button`
  background-color: slateblue;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  width: 4.5rem;
  align-self: center;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const StyledInput = styled.input`
  padding: 0.15rem;
  margin: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
`;

const StyledFileLabel = styled.label``;

const StyledFileInput = styled.input`
  padding: 0.15rem;
  margin: 0.5rem;
  background-color: #efefef;
  padding: 22px;
  border-radius: 16px;
  &:hover {
    background-color: #dcdcdc;
    cursor: pointer;
  }
`;

export default ImageUploadForm;
