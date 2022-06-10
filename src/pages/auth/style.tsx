import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${COLORS.background};
  display: flex;
  flex: 1 auto;
  justify-content: center;
  align-items: center;
  padding: 54px 0px;

  form {
    width: 100%;
  }

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
    width: clamp(400px, 40vw, 720px);

    h1 {
      color: ${COLORS.title};
      font-size: 24px;
      font-weight: 600;
      font-family: "Archivo", Archivo;
    }
  }
`;
