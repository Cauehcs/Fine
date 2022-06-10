import styled from "styled-components";

export const Container = styled.div.attrs((props) => {})`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: ${(props) => props.gap}px;
  column-gap: ${(props) => props.gap}px;
  button {
    height: 48px;
    min-width: 80px;
    flex-grow: 1;
  }
`;
