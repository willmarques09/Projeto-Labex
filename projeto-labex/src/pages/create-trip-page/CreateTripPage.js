import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/base-url";
import { useProtectPage } from "../protec/protc";
import { CreateTripForm, CreateTripScreen } from "./stylesCreateTrip";

const CreateTripsPage = (props) => {
  useProtectPage()
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState();
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");
  const token = localStorage.getItem("token");


  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePlanet = (event) => {
    setPlanet(event.target.value);
  };

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeDuration = (event) => {
    setDurationInDays(event.target.value);
  };

  const createTrip = async () => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays,
    };
    try {
      const response = await axios.post(`${BASE_URL}/trips`, body, headers);
      setName("");
      setPlanet("");
      setDate("");
      setDescription("");
      setDurationInDays("");
      alert('Trip created!')
    } catch (err) {
      console.log(err.response)
      alert(
        "Algo ruím aconteceu. Entre em contato com os desenvolvedores para mais informações."
      );
    }
  };
  return (
    <CreateTripScreen>
      <CreateTripForm>
        <TextField
          id="standard-basic"
          label="Nome"
          variant="standard"
          onChange={onChangeName}
          value={name}
          required
        />
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">
            Planeta
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Planets"
            onChange={onChangePlanet}
            value={planet ? planet : ''}
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Mercúrio">
              <em>Mercúrio</em>
            </MenuItem>
            <MenuItem value="Vênus">
              <em>Vênus</em>
            </MenuItem>
            <MenuItem value="Marte">
              <em>Marte</em>
            </MenuItem>
            <MenuItem value="Júpiter">
              <em>Júpiter</em>
            </MenuItem>
            <MenuItem value="Saturno">
              <em>Saturno</em>
            </MenuItem>
            <MenuItem value="Urano">
              <em>Urano</em>
            </MenuItem>
            <MenuItem value="Netuno">
              <em>Netuno</em>
            </MenuItem>
            <MenuItem value="Plutão">
              <em>Plutão</em>
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="Data"
          id="standard-basic"
          variant="standard"
          onChange={onChangeDate}
          value={date}
          required
        />
        <TextField
          id="standard-basic"
          label="Descrição"
          variant="standard"
          onChange={onChangeDescription}
          value={description}
          required
        />
        <TextField
          type="number"
          id="standard-basic"
          label="Duração (days)"
          variant="standard"
          onChange={onChangeDuration}
          value={durationInDays}
          required
        />
        <Button variant="contained" onClick={createTrip}>
        Mandar
        </Button>
      </CreateTripForm>
    </CreateTripScreen>
  );
};

export default CreateTripsPage;