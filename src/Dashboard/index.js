import React from 'react';
import styled from 'styled-components';

import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';

const ChartGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`;

export default function () {
  return <Page name='dashboard'>
    <PriceGrid/>
    <ChartGrid>
      <CoinSpotlight/>
      <div>Chart will be here</div>
    </ChartGrid>
  </Page>
}