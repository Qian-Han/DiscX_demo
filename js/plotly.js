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
      size: 24
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