import { Divider } from "../../components/divider";
import { Input } from "../../components/input";
import { Container } from "./style";

export function Auth() {
  return (
    <Container>
      <div>
        <h1>Entrar</h1>
        <Divider />
        <Input label="E-mail" margin="none" />
        <Input label="Senha" margin="margin-top" />
        <Divider />
      </div>
    </Container>
  );
}
