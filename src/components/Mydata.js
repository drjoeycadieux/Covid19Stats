import React from "react";
import ShowcaseButton from "../showcase-components/showcase-button";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
} from "index";

const myDATA = [
  { id: "00036", y: 200400, x: 1504121437 },
  { id: "00036", y: 200350, x: 1504121156 },
  { id: "00036", y: 200310, x: 1504120874 },
  { id: "00036", y: 200260, x: 1504120590 },
  { id: "00036", y: 200210, x: 1504120306 },
  { id: "00036", y: 200160, x: 1504120024 },
  { id: "00036", y: 200120, x: 1504119740 },
  { id: "00036", y: 200070, x: 1504119458 },
  { id: "00036", y: 200020, x: 1504119177 },
  { id: "00036", y: 199980, x: 1504118893 },
  { id: "00036", y: 199930, x: 1504118611 },
  { id: "00036", y: 199880, x: 1504118330 },
  { id: "00036", y: 199830, x: 1504118048 },
  { id: "00036", y: 199790, x: 1504117763 },
  { id: "00036", y: 199740, x: 1504117481 }
];

const yDomain = myDATA.reduce(
  (res, row) => {
    return {
      max: Math.max(res.max, row.y),
      min: Math.min(res.min, row.y)
    };
  },
  { max: -Infinity, min: Infinity }
);

export default class Example extends React.Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const content = useCanvas ? "TOGGLE TO SVG" : "TOGGLE TO CANVAS";
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <ShowcaseButton
          onClick={() => this.setState({ useCanvas: !useCanvas })}
          buttonContent={content}
        />
        <XYPlot
          margin={{ left: 75 }}
          xType="time"
          width={300}
          height={300}
          yDomain={[yDomain.min, yDomain.max]}
        >
          <BarSeries className="vertical-bar-series-example" data={myDATA} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}
