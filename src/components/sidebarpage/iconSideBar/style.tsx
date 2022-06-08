import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;
  opacity: 0.6;
  padding: 8px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
    background-color: rgba(48, 48, 54, 0.1);
    border-radius: 50%;

    > div {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  > div {
    position: absolute;
    background-color: ${COLORS.black};
    padding: 8px 12px;
    opacity: 1;
    transform: translateX(120%);
    margin: 0 0 !important;
    border-radius: 16px;
    color: ${COLORS.white};
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
`;
