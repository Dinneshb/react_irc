import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutUsContainer = styled(Container)`
  background-color: #9575cd;
  color: #fff;
  margin:0 auto;
  padding: 50px;
  border-radius: 0px;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  margin-right: 30px; /* Adjust the margin as needed */
`;

const AboutUsContentWrapper = styled.div`
  max-width: 600px;
`;

const AboutUsHeading = styled.h2`
  font-size: 3em;
  justify-content: center;
  margin-bottom: 30px;
  color: white;
`;

const AboutUsContent = styled.p`
  font-size: 1.4em;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const AboutUsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AboutUsListItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 15px;
`;

const ThankYouMessage = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 30px;
`;

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <ImageContainer>
       {/* <img src='C:\Users\DINESH\Desktop\busticket\redbus-clone-app\src\components\photos\bus1.jpeg'></img> */}
      </ImageContainer>
      <AboutUsContentWrapper>
        <AboutUsHeading>About Us</AboutUsHeading>
        <AboutUsContent>
          Welcome to our bus ticket booking platform! At Traverse, we strive to provide a seamless and enjoyable travel experience for our users. Whether you're a frequent traveler or planning a one-time trip, we've got you covered.
        </AboutUsContent>
        <AboutUsContent>
          Our mission is to simplify the process of booking bus tickets and make it convenient for you to travel to your desired destinations. Here's what sets us apart:
        </AboutUsContent>
        <AboutUsList>
          <AboutUsListItem>Wide Network: We have a vast network of bus operators covering various routes, ensuring you have options for your journey.</AboutUsListItem>
          <AboutUsListItem>Easy Booking: Our user-friendly interface makes booking bus tickets a breeze. Just a few clicks, and you're all set!</AboutUsListItem>
          <AboutUsListItem>Secure Transactions: We prioritize the security of your transactions, providing a safe and reliable payment process.</AboutUsListItem>
          <AboutUsListItem>24/7 Customer Support: Our dedicated support team is available around the clock to assist you with any queries or concerns.</AboutUsListItem>
          <AboutUsListItem>Travel Comfort: We understand the importance of a comfortable journey. Choose from a range of bus options to suit your preferences.</AboutUsListItem>
        </AboutUsList>
        <ThankYouMessage>
          Thank you for choosing Traverse. We look forward to being your trusted companion in your travel adventures.
        </ThankYouMessage>
      </AboutUsContentWrapper>
    </AboutUsContainer>
  );
};

export default AboutUsPage;
