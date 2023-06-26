import styled from 'styled-components';
import { greyColor, whiteColor } from '../../components/UI/variables';

export const WrapStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 1086px;
    max-height: 100vh;
    min-height: 85vh;
    border: 1px solid ${greyColor};
    border-radius: 10px;
    background-color: ${whiteColor};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    padding: 2rem 0;
`;
