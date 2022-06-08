import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  position: fixed;
  top: 10vh;
  left: calc(clamp(0px, 10vw, 100px));
  width: 20px;
  height: 20px;
  background-color: ${COLORS.white};
  border-radius: 50%;
  border: 2px solid ${COLORS.black};

  > div {
  }
`;
