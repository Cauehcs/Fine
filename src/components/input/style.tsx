import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .margin-top {
    margin-top: 16px;
  }

  .margin-bottom {
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    font-weight: 400;
    color: ${COLORS.label};
  }

  label.active {
    color: ${COLORS.primary};
  }

  input {
    padding: 8px;
    height: 56px;
    width: 100%;
    margin-top: 8px;
    font-weight: 500;
    box-shadow: 0px 10px 25px rgba(52, 53, 56, 0.05);
    background-color: #fafafc;
    border: 1px solid #e6e6f0;
    border-radius: 8px;
    width: 100%;
    outline: none;
    font-size: 18px;
    transition: 0.1s ease-in-out;
    color: ${COLORS.title};

    &:focus {
      border-color: ${COLORS.primary};
    }
  }

  input[type="password"] {
    font-size: 24px;
  }
`;
