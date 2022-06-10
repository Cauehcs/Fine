import styled from "styled-components";

export const Container = styled.button.attrs((props) => {})`
  ${(props) => {
    if (props.className.includes("large")) {
      return "width: 100%; height: 56px;";
    }
  }};

  ${(props) => {
    if (props.className.includes("margin-top")) {
      return "margin-top: 16px;";
    }
  }};

  svg.onMargin {
    margin-right: 8px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.colorBackground};
  opacity: 0.85;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.colorText};
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
