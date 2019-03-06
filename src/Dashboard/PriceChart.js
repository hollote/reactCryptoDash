import highchartsConfig from './HighChartsConfig';
import React from 'react';
import ReactHighCharts from 'react-highcharts';

import { AppContext } from "../App/AppProvider";
import { Tile } from "../Shared/Tile";
import HighChartsTheme from "./HighChartsTheme";

ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({historical}) =>
        <Tile>
          {historical ?
            <ReactHighCharts config={highchartsConfig(historical)}/>
            : <div>Loading Data</div>
          }
        </Tile>
      }
    </AppContext.Consumer>
  )
}