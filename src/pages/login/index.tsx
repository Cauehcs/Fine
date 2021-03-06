import { Button } from "../../components/button";
import { FiChrome } from "react-icons/fi";
import { Divider } from "../../components/divider";
import { Input } from "../../components/input";
import { Container } from "./style";
import { COLORS } from "../../constants";
import { ButtonGroup } from "../../components/groupButton";
import { Link } from "react-router-dom";
import { Auth } from "../../services/auth";
import { GoogleAuthProvider } from "firebase/auth";

export function Login() {
  const auth = new Auth();

  return (
    <Container>
      <div>
        <h1>Iniciar sessão</h1>
        <Divider />
        <form>
          <Input type="text" label="E-mail" margin="none" />
          <Input type="password" label="Senha" margin="margin-top" />
          <Button
            margin="margin-top"
            size="large"
            text="Entrar com E-mail"
            colorBackground={COLORS.primary}
            colorText={COLORS.white}
          />
        </form>
        <Divider />
        <ButtonGroup size="large" gap={16} maxCollumn={3}>
          <Button
            margin="none"
            size="group"
            colorBackground={COLORS.green}
            icon={FiChrome}
            sizeIcon={28}
            colorIcon={COLORS.white}
            onClick={() => {
              console.log("Google");
              const provider = new GoogleAuthProvider();
              auth.SignOnPopup(provider);
            }}
          />
          <Button
            margin="none"
            size="group"
            colorBackground={COLORS.green}
            icon={FiChrome}
            sizeIcon={28}
            colorIcon={COLORS.white}
          />
          <Button
            margin="none"
            size="group"
            colorBackground={COLORS.green}
            icon={FiChrome}
            sizeIcon={28}
            colorIcon={COLORS.white}
          />
        </ButtonGroup>
        <Link to="/home">Recuperar senha</Link>
        <Link to="/register">Criar conta</Link>
      </div>
    </Container>
  );
}
