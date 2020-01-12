var trace1 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [1280, 1326, 1339, 1672, 1165, 1788, 2174, 1025, 1171, 1473, 982, 1160],
  name: '2018',
  type: 'scatter'
};
var trace2 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [1085, 1041, 1316, 1572, 1005, 1037, 1280, 1542, 1229, 1435, 1061, 1111],
  name: '2017',
  type: 'scatter'
};
var trace3 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [667, 381, 330, 660, 604, 510, 720, 399, 595, 678, 386, 517],
  name: '2016',
  type: 'scatter'
};
var data = [trace1, trace2, trace3];
var layout = {
  title: {
    text:'Statistics of vulnerabilities in recent 3 years',
    font: {
      family: 'Courier New, monospace',
      size: 22
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Months',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'No. of vulnerabilities found each year',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};


Plotly.newPlot('myDiv', data, layout);

var trace1 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  name: 'None	0.0',
  type: 'bar'
};
var trace2 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [8, 4, 8, 13, 6, 1, 12, 0, 0, 0, 0, 0],
  name: 'Low 0.1-3.9',
  type: 'bar'
};
var trace3 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [285, 245, 339, 421, 390, 207, 127, 0, 0, 0, 0, 0],
  name: 'Medium 4.0-6.9',
  type: 'bar'
 }

 var trace4 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [289, 278, 386, 414, 422, 269, 209, 0, 0, 0, 0, 0],
  name: 'High	7.0-8.9',
  type: 'bar'
 }

 var trace5 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [65, 151, 137, 120, 127, 65, 6, 0, 0, 0, 0, 0],
  name: 'Critical 9.0-10.0',
  type: 'bar'
 }

var data2 = [trace1, trace2, trace3, trace4, trace5];
var layout2 = {
  title: {
    text:'Statistics of vulnerabilies CVSS v3.0 Ratings distribution in 2018 (till July)',
    font: {
      family: 'Courier New, monospace',
      size: 15
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Months',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Number of CVE',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  },
  barmode: 'relative',
};

Plotly.newPlot('myDiv2', data2, layout2);


var trace1 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  name: 'None	0.0',
  type: 'bar'
};
var trace2 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [17, 17, 19, 45, 10, 3, 5, 10, 5, 22, 19, 14],
  name: 'Low 0.1-3.9',
  type: 'bar'
};
var trace3 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [275, 315, 538, 507, 360, 397, 387, 509, 346, 490, 433, 298],
  name: 'Medium 4.0-6.9',
  type: 'bar'
 }

 var trace4 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [455, 381, 474, 664, 389, 541, 605, 527, 466, 557, 444, 537],
  name: 'High	7.0-8.9',
  type: 'bar'
 }

 var trace5 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [133, 140, 113, 163, 162, 157, 166, 121, 206, 146, 148, 219],
  name: 'Critical 9.0-10.0',
  type: 'bar'
 }

var data3 = [trace1, trace2, trace3, trace4, trace5];
var layout3 = {
  title: {
    text:'Statistics of vulnerabilies CVSS v3.0 Ratings distribution in 2017 (Non Official)',
    font: {
      family: 'Courier New, monospace',
      size: 15
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Months',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Number of CVE',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  },
  barmode: 'relative',
};

Plotly.newPlot('myDiv3', data3, layout3);



var trace1 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  name: 'None	0.0',
  type: 'bar'
};
var trace2 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [18, 35, 14, 24, 13, 12, 31, 9, 23, 21, 21, 2],
  name: 'Low 0.1-3.9',
  type: 'bar'
};
var trace3 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [324, 434, 274, 418, 180, 216, 261, 173, 202, 253, 137, 236],
  name: 'Medium 4.0-6.9',
  type: 'bar'
 }

 var trace4 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [355, 376, 293, 415, 386, 454, 301, 176, 257, 245, 183, 193],
  name: 'High	7.0-8.9',
  type: 'bar'
 }

 var trace5 = {
  x: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  y: [157, 125, 105, 193, 160, 82, 132, 86, 99, 151, 44, 75],
  name: 'Critical 9.0-10.0',
  type: 'bar'
 }

var data4 = [trace1, trace2, trace3, trace4, trace5];
var layout4 = {
  title: {
    text:'Statistics of vulnerabilies CVSS v3.0 Ratings distribution in 2016 (Non Official)',
    font: {
      family: 'Courier New, monospace',
      size: 15
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Months',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Number of CVE',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  },
  barmode: 'relative',
};

Plotly.newPlot('myDiv4', data4, layout4);


// Figure for the strategy page
// var data5 = [
//   {
//     type: "indicator",
//     mode: "number+gauge+delta",
//     value: 180,
//     delta: { reference: 200 },
//     domain: { x: [0.25, 1], y: [0.08, 0.25] },
//     title: { text: "Revenue" },
//     gauge: {
//       shape: "bullet",
//       axis: { range: [null, 300] },
//       threshold: {
//         line: { color: "black", width: 2 },
//         thickness: 0.75,
//         value: 170
//       },
//       steps: [
//         { range: [0, 150], color: "gray" },
//         {
//           range: [150, 250],
//           color: "lightgray"
//         }
//       ],
//       bar: { color: "black" }
//     }
//   },
//   {
//     type: "indicator",
//     mode: "number+gauge+delta",
//     value: 35,
//     delta: { reference: 200 },
//     domain: { x: [0.25, 1], y: [0.4, 0.6] },
//     title: { text: "Profit" },
//     gauge: {
//       shape: "bullet",
//       axis: { range: [null, 100] },
//       threshold: {
//         line: { color: "black", width: 2 },
//         thickness: 0.75,
//         value: 50
//       },
//       steps: [
//         { range: [0, 25], color: "gray" },
//         { range: [25, 75], color: "lightgray" }
//       ],
//       bar: { color: "black" }
//     }
//   },
//   {
//     type: "indicator",
//     mode: "number+gauge+delta",
//     value: 220,
//     delta: { reference: 200 },
//     domain: { x: [0.25, 1], y: [0.7, 0.9] },
//     title: { text: "Satisfaction" },
//     gauge: {
//       shape: "bullet",
//       axis: { range: [null, 300] },
//       threshold: {
//         line: { color: "black", width: 2 },
//         thickness: 0.75,
//         value: 210
//       },
//       steps: [
//         { range: [0, 150], color: "gray" },
//         { range: [150, 250], color: "lightgray" }
//       ],
//       bar: { color: "black" }
//     }
//   }
// ];

// var layout5 = {
//   width: 600, height: 250,
//   margin: { t: 10, r: 25, l: 25, b: 10 }
// };
// Plotly.newPlot('myDiv', data5, layout5);