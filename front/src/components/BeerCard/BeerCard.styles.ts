import styled from 'styled-components';

export const Card = styled.div`
  background-color: #f8f3e3; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  min-width: 200px;
  max-width: 400px;
  text-align: center;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const BeerImage = styled.img`
  border-radius: 10px;
  height: 150px;
  object-fit: cover;
  width: 100%;
`;

export const BreweryImage = styled.img`
  border-radius: 50%;
  height: 50px;
  object-fit: cover;
  width: 50px;
`;

export const BeerName = styled.h3`
  color: #e0a800; 
  font-size: 1.5em;
  margin: 10px 0;
`;

export const BeerStyle = styled.p`
  color: #333;
  font-size: 1em;
  margin: 5px 0;
`;

export const BeerPrice = styled.p`
  color: #e0a800;
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0;
`;
