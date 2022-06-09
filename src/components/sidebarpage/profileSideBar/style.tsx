import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${COLORS.white};
  position: relative;
  cursor: pointer;
  /* box-shadow: 0px 0px 20px 3px rgb(0 0 0 / 20%); */
  border: 2px solid ${COLORS.black};
  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 16px;
  }
`;
