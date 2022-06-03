import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/base-url";
import { Form, LoginScreen } from "./stylesLogin";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${BASE_URL}/login`, body);
      localStorage.setItem("token", response.data.token);
      navigate("/admin/trips/list");
    } catch (err) {
      alert(
        "Algo ruím aconteceu. Entre em contato com os desenvolvedores para mais informações."
      );
    }
  };

  return (
    <LoginScreen>
      <Form>
        <TextField
          type="email"
          label="Email"
          variant="standard"
          onChange={onChangeEmail}
          value={email}
          required
        />
        <TextField
          type="password"
          label="Senha"
          variant="standard"
          onChange={onChangePassword}
          value={password}
          required
        />
        <Button
          variant="contained"
          sx={{
            background: "#EF7A85",
            "&:hover": {
              backgroundColor: "#FF90B3",
              color: "black",
            },
          }}
          onClick={login}
        >
          Entrar
        </Button>
      </Form>
    </LoginScreen>
  );
};

export default LoginPage;
