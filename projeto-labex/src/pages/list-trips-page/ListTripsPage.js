import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomUl, ListTripsScreen, TripCard } from "./stylesListTrips";

const ListTripsPage = (props) => {
  const navigate = useNavigate();
  const mappedTrips = props.trips.map((item) => {
    return (
      <TripCard>
        <CustomUl key={item.id}>
          <li key={item.name}>
            <b>Name:</b> {item.name}
          </li>
          <li key={item.description}>
            <b>Description:</b> {item.description}
          </li>
          <li key={item.planet}>
            <b>Planet:</b> {item.planet}
          </li>
          <li key={item.durationInDays}>
            <b>Duration:</b> {item.durationInDays}
          </li>
          <li key={item.date}>
            <b>Date:</b> {item.date}
          </li>
        </CustomUl>
      </TripCard>
    );
  });

  return (
    <ListTripsScreen>
      <Button
        variant="contained"
        sx={{
          width: "40%",
          margin: "1vh",
          background: "#EF7A85",
          "&:hover": {
            backgroundColor: "#FF90B3",
            color: "black",
          },
        }}
        onClick={() => navigate("/trips/application")}
      >
        Aplique agora!!
      </Button>
      {mappedTrips}
    </ListTripsScreen>
  );
};

export default ListTripsPage;