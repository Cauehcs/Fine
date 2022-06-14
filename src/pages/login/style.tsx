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
    padding: 54px 64px 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: clamp(400px, 40vw, 720px);

    h1 {
      color: ${COLORS.title};
      font-size: 24px;
      font-weight: 600;
      font-family: "Archivo", Archivo;
      width: 100%;
      text-align: left;
    }

    a {
      color: ${COLORS.title};
      font-size: 16px;
      opacity: 0.8;
      font-weight: 600;
      font-family: "Archivo", Archivo;
      text-decoration: none;
      margin-top: 16px;
      outline: none;
    }

    a:first-of-type {
      margin-top: 48px;
    }

    a:hover,
    a:focus {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
