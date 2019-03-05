import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from "../Shared/Tile";

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function ({name, symbol, topSection}) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon> X </DeleteIcon>
      ) : null}
    </CoinHeaderGridStyled>
  )
}