import highchartsConfig from './HighChartsConfig';
import React from 'react';
import ReactHighCharts from 'react-highcharts';

import { AppContext } from "../App/AppProvider";
import { Tile } from "../Shared/Tile";
import HighChartsTheme from "./HighChartsTheme";
import ChartSelect from "./ChartSelect";

ReactHighCharts.Highcharts.setOptions(HighChartsTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({historical, changeChartSelect}) =>
        <Tile>
          <ChartSelect
            defaultValue={"months"}
            onChange={e => changeChartSelect(e.target.value)}
          >
            <option value={"days"}>Days</option>
            <option value={"weeks"}>Weeks</option>
            <option value={"months"}>Months</option>
            <option value={"years"}>Years</option>
          </ChartSelect>
          {historical ?
            <ReactHighCharts config={highchartsConfig(historical)}/>
            : <div>Loading Data</div>
          }
        </Tile>
      }
    </AppContext.Consumer>
  )
}