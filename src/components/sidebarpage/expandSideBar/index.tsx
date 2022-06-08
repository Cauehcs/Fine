import { FiCheck } from "react-icons/fi";
import { COLORS } from "../../../constants";
import { Container } from "./style";

export function ExpandSidebar() {
  return (
    <Container>
      <FiCheck color={COLORS.black} size={20}></FiCheck>
    </Container>
  );
}
