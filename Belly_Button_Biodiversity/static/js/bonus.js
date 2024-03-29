function buildGauge(wFreq) {
    // Enter the washing frequency between 0 and 180
    var level = parseFloat(wFreq) * 20; // if I have 9 goes to 180 thats the max value of degrees

    // Trig to calculate the meter point
    var degrees = 180 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Triangle Path
    var mainPath = "M -.0 -0.06 L .0 0.06 L ";
    var pathX = String(x);
    var space = " ";
    var pathY =String(y);
    var pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);

    // Create the gaugeData
    var gaugeData = [
    {
        type: "scatter",
        x: [0],
        y: [0],
        marker: { size: 12, color: "850000"},
        showlegend: false,
        name: "Freq",
        text: level, 
        hoverinfo: "text+name"
    },
    {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {
        colors: [
            "rgba(0, 105, 11, .5)",
            "rgba(10, 120, 22, .5)",
            "rgba(14, 127, 0, .5)",
            "rgba(110, 154, 22, .5)",
            "rgba(170, 202, 42, .5)",
            "rgba(202, 209, 95, .5)",
            "rgba(210, 206, 145, .5)",
            "rgba(232, 226, 202, .5)",
            "rgba(240, 230, 215, .5)",
            "rgba(255, 255, 255, 0)"
        ]
        },
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: false

    }
    ];
    // Create the gaugeLayout
    var gaugeLayout = {
    shapes: [
        {
        type: "path",
        path: path, 
        fillcolor: "850000",
        line: {
            color: "850000"
        }
        }
    ],
    title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
    height: 500,
    width: 500,
    xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
    },
    yaxis:{
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range:[-1, 1]
    }
    };
    var GAUGE = document.getElementById("gauge"); 
    Plotly.newPlot(GAUGE, gaugeData, gaugeLayout);
};

  // HINT: You will need to use slice() to grab the top 10 sample_values,
  // otu_ids, and labels (10 each).
