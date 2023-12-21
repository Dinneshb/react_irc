import React, { useState } from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9575cd;
  height: 100vh;
  color: #333; /* Dark text color */
  padding: 0 20px;
`;

const LoginCard = styled.div`
   /* Set the image as background */
   background-color:#CCCCFF;
  border-radius: 10px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd; /* Light gray border */
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background-color: #3498db; /* Professional blue color for the button */
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <LoginPageContainer>
      {/* <Route path="RegisterForm" element={<RegisterForm/>}/> */}
      <LoginCard>
        <LoginTitle>Login to Your Account</LoginTitle>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           <LoginInput
            type="name"
            placeholder="Username"
            
            required
          />
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
        <p>
          Don't have an account?
Register here
        </p>
      </LoginCard>
    </LoginPageContainer>
  );
};

export default LoginPage;
