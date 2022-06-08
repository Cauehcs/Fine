import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
        display: flex;
        transition: all 0.2s ease-in-out;
        opacity: 0.6;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
`