// Figure for the strategy page
var data5 = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 0.75,
    delta: { reference: 0.2 },
    domain: { x: [0.25, 1], y: [0.05, 0.25] },
    title: { text: "Relative Reward"}, 
    gauge: {
      shape: "bullet",
      axis: { range: [null, 1] },
      threshold: {
        line: { color: "red", width: 2 },
        thickness: 3,
        value: 0.75
      },
      steps: [
        { range: [0, 0.5], color: "gray" },
        {
          range: [0.5, 1],
          color: "lightgray"
        }
      ],
      bar: { color: "#008700" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 0.35,
    delta: { reference: 0.2 },
    domain: { x: [0.25, 1], y: [0.4, 0.6] },
    title: { text: "Cost" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 1] },
      threshold: {
        line: { color: "red", width: 2 },
        thickness: 2,
        value: 0.35
      },
      steps: [
        { range: [0, 0.25], color: "gray" },
        { range: [0.25, 1], color: "lightgray" }
      ],
      bar: { color: "#d70000" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 0.96,
    delta: { reference: 0.2 },
    domain: { x: [0.25, 1], y: [0.75, 0.95] },
    title: { text: "Exploit Length" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 1] },
      threshold: {
        line: { color: "red", width: 2 },
        thickness: 2,
        value: 0.96
      },
      steps: [
        { range: [0, 0.2], color: "gray" },
        { range: [0.2, 1], color: "lightgray" }
      ],
      bar: { color: "#ffd700" }
    }
  }
];

var layout5 = {
  width: 1200, height: 250,
  margin: { t: 0, r: 400, l: 100, b: 20 }
};
Plotly.newPlot('myDiv5', data5, layout5);