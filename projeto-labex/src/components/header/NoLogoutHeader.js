import { useNavigate } from "react-router-dom";
import { Header, Labe, X } from "./styledHeader";

const NoLogoutHeader = () => {
const navigate = useNavigate()
  return (
    <Header>
      <Labe onClick={() => navigate('/')}>Labe<X>X</X></Labe>
    </Header>
  );
};

export default NoLogoutHeader;