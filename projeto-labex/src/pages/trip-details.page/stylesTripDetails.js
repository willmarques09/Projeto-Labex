import styled from "styled-components";
export const ApplicantsLoadingMessage = styled.h1`
  position: relative;
  left: 14vw;
`;

export const ApprovedLoadingMessage = styled.h1``;
export const DetailsScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplicantCardSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10vh;
  align-items: start;
`;

export const ApprovedCardSection = styled.section`
  display: flex;
`;
export const SectionTitle = styled.div`
  display: flex;
`;
export const Card = styled.section`
  display: flex;
  padding: 1vw;
  flex-direction: column;
  text-align: left;
  margin: 1vw;
  border-radius: 25px;
  transition: all 0.5s ease;
 
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;