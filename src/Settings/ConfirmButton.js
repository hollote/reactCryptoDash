import React from 'react';
import styled from 'styled-components';

import { AppContext } from "../App/AppProvider";

const ConfigmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function () {
  return <AppContext.Consumer>
    {({confirmFavorites}) =>
      <CenterDiv>
        <ConfigmButtonStyled onClick={confirmFavorites}>
          Confirm Favorites
        </ConfigmButtonStyled>
      </CenterDiv>
    }
  </AppContext.Consumer>
}