import React from 'react';
import styled from 'styled-components';

const ContactPageContainer = styled.div`
  font-family: 'Arial, sans-serif';
  margin: 0;
  background-color: #9575cd;;
  padding: 0;
  height: 100%;
  padding:25px;
  `;
  
  
  const MainContent = styled.main`
  display: flex;
  background-color: #E6E6FA;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin:auto;
  padding: 25px;
  width: 80%; /* Adjusted width */
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: black;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px; /* Increased max-width */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  width: 100%;
  margin-bottom: 10px;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background: #3498db;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactDetails = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const ContactUs = () => {
  return (
    <ContactPageContainer>

      <MainContent>
        <SectionTitle>CONTACT US</SectionTitle>

        <FormContainer>
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput type="text" id="name" name="name" required />

          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" name="email" required />

          <FormLabel htmlFor="message">Message:</FormLabel>
          <FormTextArea id="message" name="message" rows="6" required></FormTextArea>

          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>

        <ContactDetails>
          <h2>Contact Details</h2>
          <p>Email: info@example.in</p>
          <p>Phone: +91 (123) 456-7890</p>
          <p>Address: 123 Main St, Citytown, India</p>
        </ContactDetails>
      </MainContent>
    </ContactPageContainer>
  );
};

export default ContactUs;
