import styled from 'styled-components';
import { secondaryColor, greyColor, whiteColor } from '../UI/variables';

export const ContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${secondaryColor};

  div {
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
  }
`;
