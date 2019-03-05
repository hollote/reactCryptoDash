import React from 'react';
import { AppContext } from "../App/AppProvider";

export default function (props) {
  return (
    <AppContext.Consumer>
      {({coinList, prices, firstVisit}) => {
        if (!coinList) {
          return <div>Loading coins</div>
        }
        if (!firstVisit && !prices.length) {
          return <div>Loading prices</div>
        }
        return <div>{props.children}</div>
      }}
    </AppContext.Consumer>
  )
}