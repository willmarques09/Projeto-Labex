import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/base-url";
import { useProtectPage } from "../protec/protc";
import {
  AdminScreen,
  DeleteDiv,
  NameAndDelete,
  NameDiv,
  TripCard
} from "./stylesAdminHome";

const AdminHomePage = (props) => {
  useProtectPage();
  const navigate = useNavigate();

  const openDetails = (id, trip) => {
    props.setTrip(trip);
    navigate(`/admin/trips/${id}`);
  };
  const token = localStorage.getItem("token");
  const deleteTrip = async (id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    try {
      const response = await axios.delete(`${BASE_URL}/trips/${id}`, headers);
      window.confirm("Deleting a trip? Really?");
    } catch (err) {
      console.log(err.response);
      alert(
        "Algo ruím aconteceu. Entre em contato com os desenvolvedores para mais informações."
      );
    }
  };

  const tripCard = props.trips.map((item) => {
    return (
      <TripCard key={item.id}>
        <NameAndDelete>
          <NameDiv onClick={() => openDetails(item.id, item)}>
            <h3>{item.name}</h3>
          </NameDiv>
          <DeleteDiv>
            <Button
              sx={{
               
              }}
              aria-label="delete"
              size="large"
              onClick={() => deleteTrip(item.id)}
            >
              Delete
            </Button>
          </DeleteDiv>
        </NameAndDelete>
      </TripCard>
    );
  });

  return (
    <AdminScreen>
      <Button
        variant="contained"
        sx={{
          width: "40%",
          margin: "1vh",
        
        }}
        onClick={() => navigate("/admin/trips/create")}
      >
        Criar viagem
      </Button>
      {tripCard}
    </AdminScreen>
  );
};

export default AdminHomePage;