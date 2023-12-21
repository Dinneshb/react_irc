import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100vw;
  background: url('/images/bus5.jpg') center/cover no-repeat;
  background-color: #9575cd; /* Dark purple background color */
  color: #fff; /* Light text color */
`;

const StyledHeader = styled.header`
  padding: 40px 10px; /* Adjusted padding */
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px auto;
`;

const DateInput = styled(DatePicker)`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #ba68c8; /* Purple button color */
  color: #fff;
  width: 45%;
  padding: 15px;
  margin: 0 auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FeaturesSection = styled.section`
  background-color: #673ab7; /* Darker purple background for features */
  padding: 50px 20px;
  text-align: center;
`;

const FeatureTitle = styled.h2`
  font-size: 2em;
  color: #fff;
  margin-bottom: 20px;
`;

const FeatureItem = styled.div`
  margin-bottom: 20px;
`;

const BusOptionsSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BusOptionCard = styled.div`
  background-color: #fff;
  color: #333;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 250px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BusOptionTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const BusOptionDetails = styled.p`
  font-size: 1em;
  margin-bottom: 5px;
`;

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <StyledHomeContainer>
      <StyledHeader>
        <Title>Find and Book Your Bus Tickets</Title>
        <SearchForm>
          <DateInput
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select your travel date"
          />
          <Input
            type="text"
            placeholder="Enter starting location"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <Button type="submit">Search Buses</Button>
        </SearchForm>
      </StyledHeader>

      <FeaturesSection>
        <FeatureTitle>Why Choose Our Bus Booking Service?</FeatureTitle>
        <FeatureItem>
          <h3>Wide Network</h3>
          <p>Connects you to bus services across multiple cities.</p>
        </FeatureItem>
        <FeatureItem>
          <h3>Comfortable Travel</h3>
          <p>Enjoy a comfortable journey with our partnered bus operators.</p>
        </FeatureItem>
        <FeatureItem>
          <h3>Secure Booking</h3>
          <p>Your information is safe with our secure booking system.</p>
        </FeatureItem>
      </FeaturesSection>

      <BusOptionsSection>
        <BusOptionCard>
          <BusOptionTitle>Express Shuttle</BusOptionTitle>
          <BusOptionDetails>Departure: 10:00 AM</BusOptionDetails>
          <BusOptionDetails>Arrival: 2:00 PM</BusOptionDetails>
          <BusOptionDetails>Price: Rs.1750</BusOptionDetails>
        </BusOptionCard>

        <BusOptionCard>
          <BusOptionTitle>Luxury Liner</BusOptionTitle>
          <BusOptionDetails>Departure: 12:00 PM</BusOptionDetails>
          <BusOptionDetails>Arrival: 4:00 PM</BusOptionDetails>
          <BusOptionDetails>Price: Rs.2800</BusOptionDetails>
        </BusOptionCard>

        <BusOptionCard>
          <BusOptionTitle>City Hopper</BusOptionTitle>
          <BusOptionDetails>Departure: 2:00 PM</BusOptionDetails>
          <BusOptionDetails>Arrival: 6:00 PM</BusOptionDetails>
          <BusOptionDetails>Price: Rs.2100</BusOptionDetails>
        </BusOptionCard>
      </BusOptionsSection>
    </StyledHomeContainer>
  );
};

export default Home;
