import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  background-color: ${COLORS.primary};
  opacity: 0.9;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
