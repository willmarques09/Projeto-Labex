import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SpaceShip from "../../assets/space-ship.svg";
import {
  ButtonsContainer,
  Home,
  HomeImage,
  TextAndButtons
} from "./stylesHomePage";


const HomePage = (props) => {

  const navigate = useNavigate();
  return (
    <Home>
      <HomeImage src={SpaceShip} />
      <TextAndButtons>
        <h2>Cansado da Terra? Toneladas de dinheiro sem ter onde gastar?</h2>
        <p>
        Então considere candidatar-se a uma viagem intergaláctica! Se você alguma vez quis
          ver o céu vermelho de Marte ou apenas querer fugir de tudo e
          todos (especialmente todos) podemos ajudá-lo!{" "}
        </p>
        <ButtonsContainer>
          <Button
            sx={{
            
              "&:hover": { background: "#7F5CFF" },
            }}
            variant="contained"
           
            onClick={() => navigate("/trips/list")}
          >
            Viagens disponíveis
          </Button>

          <Button
            sx={{ background: "#EF7A85", color: "black" }}
            variant="contained"
          
            onClick={() => navigate("/login")}
          >
            área de funcionários
          </Button>
        </ButtonsContainer>
      </TextAndButtons>
    </Home>
  );
};

export default HomePage;