import styled from "styled-components";

export const ListTripsScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TripCard = styled.div`
  padding: 2vh;
  margin: 5px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border-radius: 25px;
  transition: all 0.5s ease;
  &:hover {
    background: #d7c2ff;
  }
`;

export const CustomUl = styled.ul`
  list-style-type: none;
`;