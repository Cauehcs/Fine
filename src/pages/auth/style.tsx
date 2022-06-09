import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.background};
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    background-color: ${COLORS.white};
    box-shadow: 0px 2px 8px 3px rgb(0 0 0 / 20%);
    border-radius: 8px;
    padding: 54px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      color: ${COLORS.title};
      font-size: 24px;
      font-weight: 600;
    }
  }
`;
