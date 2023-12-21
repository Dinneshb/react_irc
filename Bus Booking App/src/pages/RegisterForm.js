// RegistrationForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color:#9575cd;
  margin-top: 50px; /* Add margin at the top to move the container down */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Darker shadow */
  margin:auto;
  padding:25px;
`;


const FormWrapper = styled.div`
  width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the form elements horizontally */
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%; /* Take full width of the container */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%; /* Take full width of the container */
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  color: #333333;
`;

const Input = styled.input`
  width: 100%; /* Take full width of the container */
  padding: 12px;
  font-size: 16px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  width: 35%;
  margin: 0 auto; /* Center the button horizontally */
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;



const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <FormContainer>
      <FormWrapper>
        <FormTitle>Register for Bus Booking</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit">Register</Button>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default RegistrationForm;
