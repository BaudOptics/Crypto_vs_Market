function getData(choice){
  
    if (choice == 'dollar' ) {
      scrapeData(choice);
    //   const dollarLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/';
    
    // d3.json(dollarLink).then((data, i) => {
    //   // Once we get a response, send the data.features object to the createFeatures function
    //   let closeDollar = data.map((values, i) => data[i].Close);
    //   let dateDollar = data.map((values, i) => (data[i].Date.$date)); 
    //   // console.log(closeDollar);
    //   graphData(closeDollar, dateDollar, "Dollar")
    // }); 
    }
    else if (choice == 'gold'){
    const goldLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com//api/gold/';
    d3.json(goldLink).then((data, i) => {
      // Once we get a response, send the data.features object to the createFeatures function
      let closeGold = data.map((values, i) => data[i].Close);
      let date = data.map((values, i) => (data[i].Date.$date)); 
      // console.log(date);
      graphData(closeGold, date, "Gold");
      
    });
    }
    
    else if (choice == 'snp'){
      const snpLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/';
      d3.json(snpLink).then((data, i) => {
        // Once we get a response, send the data.features object to the createFeatures function
        let closeSnp = data.map((values, i) => data[i].Close);
        let date = data.map((values, i) => (data[i].Date.$date));
        // console.log(closeSnp);
        graphData(closeSnp, date, "S&P 500");
      });
    }
    
    else if (choice == 'vix'){
      const vixLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/vix/';
      d3.json(vixLink).then((data, i) => {
        // Once we get a response, send the data.features object to the createFeatures function
        let closeVix = data.map((values, i) => data[i].Close);
        let date = data.map((values, i) => (data[i].Date.$date));
        // console.log(closeVix);
        graphData(closeVix, date, "Vix");
      });
    }
    
    else if (choice == 'bitcoin'){
      const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/BTC/01-01-2013,01-01-2021';
      d3.json(cryptoLink).then((data, i) => {
        // Once we get a response, send the data.features object to the createFeatures function
        let closeCrypto = data.map((values, i) => data[i].Close);
        let date = data.map((values, i) => (data[i].Date.$date));
        console.log(closeCrypto);
        graphData(closeCrypto, date, "Bitcoin");
      });
    }
    else if (choice == 'litecoin'){
      const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC/01-01-2013,01-01-2021';
      d3.json(cryptoLink).then((data, i) => {
        // Once we get a response, send the data.features object to the createFeatures function
        let closeCrypto = data.map((values, i) => data[i].Close);
        let date = data.map((values, i) => (data[i].Date.$date));
        console.log(closeCrypto);
        graphData(closeCrypto, date, "Litecoin");
      });
    }
    else if (choice == 'etherum'){
      const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/ETC/01-01-2013,01-01-2021';
      d3.json(cryptoLink).then((data, i) => {
        // Once we get a response, send the data.features object to the createFeatures function
        let closeCrypto = data.map((values, i) => data[i].Close);
        let date = data.map((values, i) => (data[i].Date.$date));
        console.log(closeCrypto);
        graphData(closeCrypto, date, "Etherum");
      });
    }
    else {
      graphData("none", "none" , "none")
      console.log('no data selected');
    }
    };

// Get data for second axis on the graph

// function getData2(choice){
//   if (choice == 'dollar' ) {
//     const dollarLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/dollar/';
  
//   d3.json(dollarLink).then((data, i) => {
//     // Once we get a response, send the data.features object to the createFeatures function
//     let closeDollar = data.map((values, i) => data[i].Close);
//     let dateDollar = data.map((values, i) => (data[i].Date.$date)); 
//     // console.log(closeDollar);
//     graph2Data(closeDollar, dateDollar, "Dollar");
//   }); 
//   }
//   else if (choice == 'gold'){
//   const goldLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com//api/gold/';
//   d3.json(goldLink).then((data, i) => {
//     // Once we get a response, send the data.features object to the createFeatures function
//     let closeGold = data.map((values, i) => data[i].Close);
//     let date = data.map((values, i) => (data[i].Date.$date)); 
//     // console.log(date);
//     graph2Data(closeGold, date, "Gold");
    
//   });
//   }
  
//   else if (choice == 'snp'){
//     const snpLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/snp500/';
//     d3.json(snpLink).then((data, i) => {
//       // Once we get a response, send the data.features object to the createFeatures function
//       let closeSnp = data.map((values, i) => data[i].Close);
//       let date = data.map((values, i) => (data[i].Date.$date));
//       // console.log(closeSnp);
//       graph2Data(closeSnp, date, "S&P 500");
//     });
//   }
  
//   else if (choice == 'vix'){
//     const vixLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/vix/';
//     d3.json(vixLink).then((data, i) => {
//       // Once we get a response, send the data.features object to the createFeatures function
//       let closeVix = data.map((values, i) => data[i].Close);
//       let date = data.map((values, i) => (data[i].Date.$date));
//       // console.log(closeVix);
//       graph2Data(closeVix, date, "VIX");
//     });
//   }
  
//   else if (choice == 'crypto'){
//     const cryptoLink = 'http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api/crypto/LTC';
//     d3.json(cryptoLink).then((data, i) => {
//       // Once we get a response, send the data.features object to the createFeatures function
//       let closeCrypto = data.map((values, i) => data[i].Close);
//       // console.log(closeCrypto);
//       graph2Data(closeCrypto);
//     });
//   }
  
//   else {
//     graph2Data("none")
//     console.log('no data selected')
//   }
//   };

// Draws second line
function graph2Data(x, y, choice){
    if (x == "none"){
      d3.select("#line2").remove()
      d3.select("#lineName2").remove()
    }
    else{
    d3.select("#line2").remove()
    d3.select("#lineName2").remove()
    d3.select("#yAxis2").remove()
    // d3.select("#xAxis2").remove()
    // console.log(x);
    // console.log(y);
    let dataArray = [];
    for (var i = 0; i < x.length; i++) {
          dataArray.push([ x[i], y[i]])
      }
    // console.log(dataArray);
    // console.log(dataArray[0][0]);
    // console.log(dataArray[0][1])
    function convertTime(unixTime) {
      let dateObject=new Date(unixTime),
      // full date & time
        date=dateObject.toDateString();
      //  date, time & time zone 
      date=dateObject.toLocaleString("en-US", {timeZoneName: "short"});
      // month -date-year
      d=dateObject.getDate(),
      m=dateObject.getMonth()+1,
      y=dateObject.getFullYear(),
      date=m+'-'+d+'-'+y;
      return date;
  }
  let parseTime = d3.timeParse("%m-%e-%Y");
    dataArray.forEach(function(data) {
      data[0] = +data[0];
      data[1] = convertTime(data[1]);
      data[1] = parseTime(data[1]);
      // console.log(data[1]);
    });
    
    // Configure a time scale
    // d3.extent returns the an array containing the min and max values for the property specified
    let xTimeScale = d3.scaleTime()
                      .domain(d3.extent(dataArray, record => record[1]))
                      .range([0, chartWidth])
    
    let yLinearScale2 = d3.scaleLinear()
                        .domain([0, d3.max(dataArray, record => record[0])])
                        .range([chartHeight, 0]);
  
    // Create two new functions passing the scales in as arguments
    // These will be used to create the chart's axes
    let bottomAxis = d3.axisBottom(xTimeScale);
    let rightAxis = d3.axisRight(yLinearScale2);
  
    // Configure a line function called drawLine which will plot the x and y coordinates using our scales
    let lineGen = d3.line()
      .x( d => xTimeScale(d[1]))
      .y ( d => yLinearScale2(d[0]));
  
    // Append an SVG path and plot its points using the line function
    chartGroup.append('path')
    // The drawLine function returns the instructions for creating the line for forceData
              .attr('d', lineGen(dataArray))
              .attr('id', "line2")
              .classed("line orange", true);
  
    chartGroup.append("g")
      .attr("id", "yAxis2")
      .classed("axis", true)
      .call(rightAxis)
      .attr('transform', `translate(${chartWidth}, 0)`);
      
    // Append an SVG group element to the chartGroup, create the bottom axis inside of it
    // Translate the bottom axis to the bottom of the page
    // chartGroup.append("g")
    //   .attr("id", "xAxis2")
    //   .classed("axis", true)
    //   .attr("transform", `translate(0, ${chartHeight})`)
    //   .call(bottomAxis);
  
      chartGroup.append("text")
      .attr("id", "lineName2")
      .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 60})`)
        .classed("orange-text text", true)
        .text(`${choice} Cost at Close`);
  }};


  // function updateChoice2() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset2");
//   // Assign the value of the dropdown menu option to a variable
//   let choice = dropdownMenu.property("value");
//   let dropdownDate = d3.select("#startyear");
//   let start = dropdownDate.property("value");
//   let dropdownEnd = d3.select("#endyear");
//   let end = dropdownEnd.property("value");
//   scrapeData(choice, 2, start, end)
//   console.log("choice 2 dates:")
//   console.log(start)
//   console.log(end)
// }






///////////////
function makeResponsive() {
  scrapeData('BTC', 1, "01-01-2013", "01-01-2021");
  scrapeData('LTC', 2, "01-01-2013", "01-01-2021");


  d3.selectAll("#selDataset").on("change", updateChoice);
  d3.selectAll("#startyear").on("change", updateChoice);
  d3.selectAll("#endyear").on("change", updateChoice);
  d3.selectAll("#selDataset2").on("change", updateChoice);

  function updateChoice() {
    // Use D3 to select the dropdown menu
    // Assign the value of the dropdown menu option to a variable
    let dropdownMenu = d3.select("#selDataset");
    let choice = dropdownMenu.property("value");
    let dropdownDate = d3.select("#startyear");
    let start = dropdownDate.property("value");
    let dropdownEnd = d3.select("#endyear");
    let end = dropdownEnd.property("value");
    let dropdownMenu2 = d3.select("#selDataset2");
    // Assign the value of the dropdown menu option to a variable
    let choice2 = dropdownMenu2.property("value");
    //Send data selection to scrapeData function
    scrapeData(choice, 1, start, end)
    scrapeData(choice2, 2, start, end)
    // console.log("choice 1 dates:")
    // console.log(start)
    // console.log(end)
  }

  //Scrape data function
  function scrapeData(coin, choiceNum, startYear, endYear) {
    const baseLink = "http://demosimple-env.eba-pyvzehps.us-east-2.elasticbeanstalk.com/api"
    if (coin == "none") {
      if (choiceNum == 1) { graphData(coin, coin, coin) }
      else { graphData(coin, coin, coin) }
    }
    else if (coin == "BTC" || coin == "LTC" || coin == "ETC") {
      let link = `${baseLink}/crypto/${coin}/${startYear},${endYear}`
      // console.log(link),
      testlink(link);
    }
    else {
      let link = `${baseLink}/${coin}/`
      testlink(link);
    }
    function testlink(link) {
      d3.json(link).then((data, i) => {
        // Once we get a response, send the data.features object to the createFeatures function
        let closeData = data.map((values, i) => data[i].Close);
        let date = data.map((values, i) => (data[i].Date.$date));
        // console.log(closeData);
        let coinUpper = coin.charAt(0).toUpperCase() + coin.slice(1);
        if (choiceNum == 1) {
          graphData(closeData, date, coinUpper, 1);
        }
        else {
          graphData(closeData, date, coinUpper, 2);
        }
      });
    };
  }

  let svgArea = d3.select("body").select("svg");
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width
  // and height of the browser window.
  let svgWidth = window.innerWidth;
  let svgHeight = window.innerHeight;

  let margin = {
    top: 30,
    right: 100,
    bottom: 100,
    left: 100
  };

  let chartHeight = svgHeight - margin.top - margin.bottom;
  let chartWidth = svgWidth - margin.left - margin.right;

  // Select body, append SVG area to it, and set its dimensions
  let svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Append a group area, then set its margins
  let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Load data from forcepoints.csv
  function graphData(x, y, choice, numChoice) {
    d3.select("#xLabel").remove()
    if (x == "none") {
      d3.select("#line2").remove()
      d3.select("#lineName2").remove()
      d3.select("#yAxis2").remove()
      d3.select("#xAxis").remove()
      d3.select("#yRight").remove()
      d3.select("#line1").remove()
      d3.select("#lineName1").remove()
      d3.select("#yAxis").remove()
      d3.select("#xAxis").remove()
      d3.select("#yLeft").remove()
      d3.selectAll("cirle").remove()


    }
    else if (numChoice == 1) {
      d3.select("#line1").remove()
      d3.select("#lineName1").remove()
      d3.select("#yAxis").remove()
      d3.select("#xAxis").remove()
      d3.select("#yLeft").remove()
      buildGraph(x, y, choice, numChoice)
    }
    else {
      d3.select("#line2").remove()
      d3.select("#lineName2").remove()
      d3.select("#yAxis2").remove()
      d3.select("#xAxis").remove()
      d3.select("#yRight").remove()
      buildGraph(x, y, choice, numChoice)

    }
    // console.log(x);
    // console.log(y);
    //Build data array from user selection
    function buildGraph(x, y, choice, numChoice) {
      let dataArray = [];

      for (var i = 0; i < x.length; i++) {
        dataArray.push([x[i], y[i]])
      }

      // console.log(dataArray);
      // console.log(dataArray[0][0]);
      // console.log(dataArray[0][1])
      //Convert time from unix to date
      function convertTime(unixTime) {
        let dateObject = new Date(unixTime),
          // full date & time
          date = dateObject.toDateString();
        //  date, time & time zone 
        date = dateObject.toLocaleString("en-US", { timeZoneName: "short" });
        // month -date-year
        d = dateObject.getDate(),
          m = dateObject.getMonth() + 1,
          y = dateObject.getFullYear(),
          date = m + '-' + d + '-' + y;
        return date;
      }
      //Parse time
      let parseTime = d3.timeParse("%m-%e-%Y");
      dataArray.forEach(function (data) {
        data[0] = +data[0];
        data[1] = convertTime(data[1]);
        data[1] = parseTime(data[1]);
        // console.log(data[1]);
      });

      // Configure a time scale
      // d3.extent returns the an array containing the min and max values for the property specified
      let xTimeScale = d3.scaleTime()
        .domain(d3.extent(dataArray, record => record[1]))
        .range([0, chartWidth]);
      let bottomAxis = d3.axisBottom(xTimeScale);
      // Append an SVG group element to the chartGroup, create the bottom axis inside of it
      // Translate the bottom axis to the bottom of the page
      chartGroup.append("g")
        .attr("id", "xAxis")
        .classed("axis", true)
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(bottomAxis);
      // Labels the x axis
      chartGroup.append("text")
        .attr("id", "xLabel")
        .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 45})`)
        .classed(`label`, true)
        .text("Date");


      // Creates y axis on the left and draws the first line
      if (numChoice == 1) {

        let yLinearScale = d3.scaleLinear()
          .domain([0, d3.max(dataArray, record => record[0])])
          .range([chartHeight, 0]);
        let leftAxis = d3.axisLeft(yLinearScale);
        chartGroup.append("g")
          .attr("id", "yAxis")
          .classed("axis", true)
          .call(leftAxis);
        chartGroup.append("text")
          .attr("id", "yLeft")
          .attr("transform", `translate(${-60}, ${chartHeight / 2})rotate(270)`)
          .classed(`green-text label`, true)
          .text(`${choice} Cost at Close`);
        buildLine(yLinearScale, "green", 1);
      }
      //Creates y axis and graph 2  
      else {
        let yLinearScale = d3.scaleLinear()
          .domain([0, d3.max(dataArray, record => record[0])])
          .range([chartHeight, 0]);
        let rightAxis = d3.axisRight(yLinearScale);
        chartGroup.append("g")
          .attr("id", "yAxis2")
          .classed("axis", true)
          .call(rightAxis)
          .attr('transform', `translate(${chartWidth}, 0)`);
        chartGroup.append("text")
          .attr("id", "yRight")
          .attr("transform", `translate(${chartWidth + 40}, ${chartHeight / 2})rotate(90)`)
          .classed(`orange-text label`, true)
          .text(`${choice} Cost at Close`);
        buildLine(yLinearScale, "orange", 2);
      }
      // Configure a line function called drawLine which will plot the x and y coordinates using our scales
      function buildLine(yLinearScale, color, number) {
        let lineGen = d3.line()
          .x(d => xTimeScale(d[1]))
          .y(d => yLinearScale(d[0]));

        // Append an SVG path and plot its points using the line function
        chartGroup.append('path')
          // The drawLine function returns the instructions for creating the line
          .attr('d', lineGen(dataArray))
          .attr('id', `line${number}`)
          .classed(`line ${color}`, true);

        // Appends Line titles to bottom of graph
        chartGroup.append("text")
          .attr("id", `lineName${number}`)
          .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 45 + (number * 20)})`)
          .classed(`${color}-text text`, true)
          .text(`${choice} Cost at Close`);

        let circlesGroup = chartGroup.selectAll("circle")
          .data(dataArray)
          .enter()
          .append("circle")
          .attr("cx", d => xTimeScale(d[1]))
          .attr("cy", d => yLinearScale(d[0]))
          .attr("r", "5")
          .attr("fill", "green");

        // Step 1: Append a div to the body to create tooltips, assign it a class
        // =======================================================
        let toolTip = d3.select("body").append("div")
          .attr("class", "tooltip");

        // Step 2: Add an onmouseover event to display a tooltip
        // ========================================================
        circlesGroup.on("mouseover", function (event, d) {
          toolTip.style("display", "block");
          toolTip.html(` <strong> ${choice} Cost:${d[0]} <br> Date: ${d[1]}</strong>`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY + "px");
        })
          // Step 3: Add an onmouseout event to make the tooltip invisible
          .on("mouseout", function () {
            toolTip.style("display", "none");
          });

      }
    }
  }
};

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, responsify() is called.
d3.select(window).on("resize", makeResponsive);