import styled from "styled-components";

export const AdminScreen = styled.div`
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
 
`;

export const NameAndDelete = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
`;

export const DeleteDiv = styled.div``;

export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  height: 7vh;
  width: 90%;
`;