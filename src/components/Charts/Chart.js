import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {

            let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
            let maximumPoint = Math.max(...dataPointValues)
           
            
  return (
    <div className="chart">
      {props.dataPoints.map( dataPoint => 
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumPoint}
          label={dataPoint.label}
        />
      )}
    </div>
  );
};

export default Chart;
