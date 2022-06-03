import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/base-url";
import { useProtectPage } from "../protec/protc";
import {
  ApplicantCardSection, ApplicantsLoadingMessage, ApprovedCardSection, ApprovedLoadingMessage, ButtonsContainer,
  Card,
  DetailsScreen, SectionTitle
} from "./stylesTripDetails";

const TripDetailsPage = (props) => {
  useProtectPage();
  const [applicants, setApplicants] = useState();
  const [approved, setApproved] = useState();
  const token = localStorage.getItem("token");
  
  const getTripDetails = async (id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/trip/${id}`, headers);
      setApplicants(response.data.trip.candidates);
      setApproved(response.data.trip.approved);
    } catch (err) {
      alert(
        "Algo ruím aconteceu. Entre em contato com os desenvolvedores para mais informações."
      );
    }
  };

  const manageApplicants = async (choice, id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    const body = {
      approve: choice,
    };
    try {
      const response = await axios.put(
        `${BASE_URL}/trips/${props.thisTrip.id}/candidates/${id}/decide`,
        body,
        headers
      );
    } catch (err) {
      alert(
        "Algo ruím aconteceu. Entre em contato com os desenvolvedores para mais informações."
      );
    }
  };

  const mappedApplicants = applicants ? (
    applicants.map((item) => {
      return (
        <Card key={item.id}>
          <p>
            <b>Nome:</b> {item.name}
          </p>
          <p>
            <b>Idade</b>: {item.age}
          </p>
          <p>
            <b>Ocupaçao:</b> {item.profession}
          </p>
          <p>
            <b>País</b>: {item.country}
          </p>
          <p>
            <b>Candidatura:</b> {item.applicationText}
          </p>
          <br></br>
          <ButtonsContainer>
            <Button
            sx={{
              background: "#eb4542",
              color: "black",
              "&:hover": {
                backgroundColor: "#e66765",
              },
            }}
              variant="contained"
              onClick={() => manageApplicants(false, item.id)}
            >
              Negar
            </Button>
            <Button
            sx={{
              background: "#6cf08f",
              color: "black",
              "&:hover": {
                backgroundColor: "#b3f2c4",
              },
            }}
              variant="contained"
              onClick={() => manageApplicants(true, item.id)}
            >
              Aprovar
            </Button>
          </ButtonsContainer>
        </Card>
      );
    })
  ) : (
    <ApplicantsLoadingMessage>Carregando...</ApplicantsLoadingMessage>
  );

  const mappedApproved = approved ? (
    approved.map((item) => {
      return (
        <Card key={item.id}>
          <p>
            <b>Nome:</b> {item.name}
          </p>
        </Card>
      );
    })
  ) : (
    <ApprovedLoadingMessage>Carregando...</ApprovedLoadingMessage>
  );

  useEffect(() => {
    getTripDetails(props.thisTrip.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTripDetails(props.thisTrip.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicants, approved]);
  return (
    <DetailsScreen>
      <SectionTitle>
        <h2>Viagem: {props.thisTrip.name}</h2>
      </SectionTitle>
      <Card>
        <p>
          <b>Descrição:</b> {props.thisTrip.description}
        </p>
        <p>
          <b>Planeta</b>: {props.thisTrip.planet}
        </p>
        <p>
          <b>Duração</b>: {props.thisTrip.durationInDays}
        </p>
        <p>
          <b>Data:</b> {props.thisTrip.date}
        </p>
      </Card>
      <SectionTitle>
        <h2>Candidates</h2>
      </SectionTitle>
      <ApplicantCardSection>{mappedApplicants}</ApplicantCardSection>
      <SectionTitle>
        <h2>Aprovado</h2>
      </SectionTitle>
      <ApprovedCardSection>{mappedApproved}</ApprovedCardSection>
    </DetailsScreen>
  );
};
export default TripDetailsPage;