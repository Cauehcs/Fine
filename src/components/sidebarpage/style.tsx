import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  width: clamp(0px, 10vw, 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.background};
  height: 100vh;
  box-shadow: -6px 0px 20px 4px rgb(0 0 0 / 20%);

  div.gc-icons {
    > div {
      margin-bottom: 16px;
    }

    div:last-of-type {
      margin-bottom: 0px;
    }
  }

  > div:not(.gc-icons):first-of-type {
    margin-top: 32px;
    padding: 16px;
    border-radius: 50%;
    background-color: ${COLORS.black};
    opacity: 1;
  }

  > div:not(.gc-icons):first-of-type:hover {
    border-radius: 25%;
  }

  div:not(.gc-icons):last-of-type {
    margin-bottom: 32px;
  }
`;
