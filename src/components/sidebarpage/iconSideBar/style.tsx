import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;
  opacity: 0.6;
  padding: 8px;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 250, 255, 0.1);
    border-radius: 50%;
  }
`;
