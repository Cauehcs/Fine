import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${COLORS.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: clamp(80px, 15vw, 320px);
    line-height: clamp(80px, 15vw, 320px);
    color: ${COLORS.title};
    opacity: 0.3;
  }

  > h2 {
    font-size: clamp(14px, 3vw, 40px);
    line-height: clamp(14px, 3vw, 40px);
    color: ${COLORS.title};
    opacity: 0.3;
  }
`;
