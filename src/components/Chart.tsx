import * as echarts from 'echarts'; // Import all echarts modules
import React, { useEffect, useState } from 'react';
import { BsCalendar2Date } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { chartMockData } from 'src/mocks/data';

const styles={
  height:"600px",
  width:"auto"
}

const Chart = () => {
  const [jsonData, setJsonData] = useState<any>(chartMockData);
  console.log( JSON.stringify(chartMockData))
  const [jsonInput, setJsonInput] = useState('');

  const handleJsonInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleApplyJson = () => {
    const temp =JSON.stringify(jsonInput)
    try {
      const parsedData = JSON.parse(temp);
      const tempo = JSON.parse(parsedData)
      setJsonData({
        xAxisData:tempo?.xAxisData,
        seriesData:tempo?.series
      });
      setJsonInput("")
    } catch (error) {
      console.error('Error parsing JSON:', error);
      // Handle parsing error if needed
    }
  };
  useEffect(() => {
    // Initialize ECharts instance
    const chartDom = document.getElementById('basicBarChart');
    const myChart = echarts.init(chartDom);

    window.addEventListener('resize', function() {
      myChart.resize();
    });

    // ECharts options for the bar chart
   const options:echarts.EChartsOption = {
        title: {
          text: '',
        },
       
      // legend:{
      //   align:"right",
      //   orient:"vertical",
      // },
       
        grid: {
          left: '10%',    // Adjust the left margin as needed
          right: '10%',   // Adjust the right margin as needed
          bottom: '2%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data:jsonData.xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: jsonData.seriesData,
        graphic:[ 
         
          {
            type: 'text',
            left: '3%',
            top: '80%', // Adjust the vertical position as needed
            style: {
              text: '4.85k',
              align: 'center',
              fontWeight: 'bold', // Set to bold
              fill: '#000', // Adjust the text color as needed
              fontSize: 14 // Adjust the font size as needed
            }
          },
         
          {
            type: 'text',
            left: '0%',   // Adjust the left position for starting income
            top: '83%',
            style: {
              text: 'Starting Income',
              align:'left',
              fill: '#666',
              fontSize: 12
            }
          },
          {
            type: 'text',
            right: '0%',   // Adjust the left position for starting income
            top: '53%',
            style: {
              text: `Ending Headcount`,
              align:'center',
              fill: '#666',
              fontSize: 12
            }
          },
          {
            type: 'text',
            right: '3%',
            top: '50%', // Adjust the vertical position as needed
            style: {
              text: '5.23k',
              align: 'center',
              fontWeight: 'bold', // Set to bold
              fill: '#000', // Adjust the text color as needed
              fontSize: 14 // Adjust the font size as needed
            }
          },
        ]
      };


    // Set options to the chart instance
    myChart.setOption(options);

    // Clean up the chart when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, [jsonData.seriesData,jsonData.xAxisData]); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <React.Fragment>
      
    <div className='chart-headers'>
    <div style={{ margin: "10px" }}>
                <textarea
                    style={{  margin: 0, padding: '10px',resize:'none' }}
                    value={jsonInput}
                    onChange={handleJsonInputChange}
                    placeholder="Enter JSON data here..."
                    rows={5} cols={40}
                />
               <div> <button
                onClick={handleApplyJson}
                >Enter</button></div>
            </div>
      <p className='emp-b-movement'>Employee Movement Breakdown</p>
      <div className='chart-options-parent'>
        <div className='chart-options-child'>
          <BsCalendar2Date size={14} />
          <p>
          2019
          </p>
        </div>
        <div className='chart-options-child'>
          <FaPlus size={12} />
          <p>
          Add Filters
          </p>
        </div>
      </div>
    </div>
    <div id="basicBarChart" style={styles} /></React.Fragment>
  );
};

export default Chart;
