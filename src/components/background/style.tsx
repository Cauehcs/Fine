import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Background = styled.div`
    background-color: ${COLORS.black};
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
`