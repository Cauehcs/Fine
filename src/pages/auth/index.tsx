import { Button } from "../../components/button";
import { FiChrome } from "react-icons/fi";
import { Divider } from "../../components/divider";
import { Input } from "../../components/input";
import { Container } from "./style";
import { COLORS } from "../../constants";

export function Auth() {
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
        <Button
          margin="none"
          size="large"
          text="Logar com Google"
          colorBackground={COLORS.white}
          colorText={COLORS.black}
        />
      </div>
    </Container>
  );
}
