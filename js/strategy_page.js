// Figure for the strategy page
var data5 = [
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 180,
    delta: { reference: 100 },
    domain: { x: [0.25, 1], y: [0.05, 0.25] },
    title: { text: "Reward (in thousands $)" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0,
        value: 170
      },
      steps: [
        { range: [0, 150], color: "gray" },
        {
          range: [150, 250],
          color: "lightgray"
        }
      ],
      bar: { color: "#008700" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 35,
    delta: { reference: 50 },
    domain: { x: [0.25, 1], y: [0.4, 0.6] },
    title: { text: "Cost (in thousands $)" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0,
        value: 50
      },
      steps: [
        { range: [0, 25], color: "gray" },
        { range: [25, 75], color: "lightgray" }
      ],
      bar: { color: "#d70000" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 96,
    delta: { reference: 50 },
    domain: { x: [0.25, 1], y: [0.75, 0.95] },
    title: { text: "Exploit Length" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0,
        value: 210
      },
      steps: [
        { range: [0, 50], color: "gray" },
        { range: [50, 150], color: "lightgray" }
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