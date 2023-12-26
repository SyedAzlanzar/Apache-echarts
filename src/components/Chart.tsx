import React, { useEffect } from 'react';
import * as echarts from 'echarts'; // Import all echarts modules
import { BsCalendar2Date } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";



const styles={
  height:"600px",
  width:"auto"
}

const Chart = () => {
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
          text: ''
        },
       
      // legend:{
      //   align:"right",
      //   orient:"vertical",
      // },
       
        grid: {
          left: '1%',
          right: '1%',
          bottom: '%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ["Expantion","Replacement","Involuntary Turnover","Voluntary Turnover","Discrepancies","Net Change"]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Chart',
            type: 'bar',
            stack: 'Total',
            silent: false,
            barCategoryGap: '3%', // Adjust the gap between bars
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            data: [0,200,400,600,800]
          },
          {
            name: 'INCOMING',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            itemStyle: {
                    borderColor: 'transparent',
                    color: function (params) {
                        // Define color based on category
                        const colorMap = {
                          'Expantion': '#9BEBB4',
                          'Replacement': '#9BEBB4',
                        };
                        return colorMap[params.name] || 'transparent';
                      },
                    },
                    
            data: ["+379", "+326", "-", '-', '-', "-"]
          },
          {
            name: 'OUTGOING',
            type: 'bar',
            stack: 'Total',
            
            label: {
              show: true,
              position: 'top'
            },
            itemStyle: {
                    borderColor: 'transparent',
                    color: function (params) {
                        // Define color based on category
                        const colorMap = {
                            'Involuntary Turnover': '#FDACAA',
                            'Voluntary Turnover': '#FDACAA',
                        };
                        return colorMap[params.name] || 'transparent';
                      },
                    },
            data: ["-", "-", "-118", '-232', '-', "-"]
          },
          {
            name: 'Discrepancies',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            itemStyle: {
                borderColor: 'transparent',
                color: function (params) {
                    // Define color based on category
                    const colorMap = {
                        'Discrepancies': '#C4C8CF',
                    };
                    return colorMap[params.name] || 'transparent';
                  },
                },
            data: ['-', '-', '-', "-",'+7', '-']
          },
          {
            name: 'Net Change',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            itemStyle: {
                borderColor: 'transparent',
                color: function (params) {
                    // Define color based on category
                    const colorMap = {
                        'Net Change': '#BEDCFE',
                    };
                    return colorMap[params.name] || 'transparent';
                  },
                },
            data: ['-', '-', '-', "-",'-', '+362']
          }
        ],
      };


    // Set options to the chart instance
    myChart.setOption(options);

    // Clean up the chart when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <React.Fragment>
    <div className='chart-headers'>
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
