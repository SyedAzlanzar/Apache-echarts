import * as echarts from "echarts";
import React, { useEffect, useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { chartMockData } from "src/mocks/data";

const styles = {
  height: "600px",
  width: "auto",
};

const Chart = () => {
  const [jsonData, setJsonData] = useState<any>(chartMockData);
  const [jsonInput, setJsonInput] = useState("");

  const handleJsonInputChange = (event) => {
    const temp = JSON.stringify(event.target.value);
    try {
      const parsedData = JSON.parse(temp);
      const tempo = JSON.parse(parsedData);
      setJsonData({
        xAxisData: tempo?.xAxisData,
        seriesData: tempo?.series,
      });
    setJsonInput(event.target.value);
      // setJsonInput("");
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };


  useEffect(() => {
    const chartDom = document.getElementById("basicBarChart");
    const myChart = echarts.init(chartDom);

    window.addEventListener("resize", function () {
      myChart.resize();
    });

    const options: echarts.EChartsOption = {
      title: {
        text: "",
      },

      grid: {
        left: "10%",
        right: "10%",
        bottom: "2%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: jsonData.xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series: jsonData.seriesData,
      graphic: [
        {
          type: "text",
          left: "3%",
          top: "80%",
          style: {
            text: "4.85k",
            align: "center",
            fontWeight: "bold",
            fill: "#000",
            fontSize: 14,
          },
        },

        {
          type: "text",
          left: "0%",
          top: "83%",
          style: {
            text: "Starting Income",
            align: "left",
            fill: "#666",
            fontSize: 12,
          },
        },
        {
          type: "text",
          right: "0%",
          top: "53%",
          style: {
            text: `Ending Headcount`,
            align: "center",
            fill: "#666",
            fontSize: 12,
          },
        },
        {
          type: "text",
          right: "3%",
          top: "50%",
          style: {
            text: "5.23k",
            align: "center",
            fontWeight: "bold",
            fill: "#000",
            fontSize: 14,
          },
        },
      ],
    };

    // Set options to the chart instance
    myChart.setOption(options);

    // Clean up the chart when the component unmounts
    return () => {
      myChart.dispose();
    };
  }, [jsonInput]);

  return (
    <React.Fragment>
      <div className="chart-headers">
        <div style={{ margin: "10px" }}>
          <textarea
            style={{ margin: 0, padding: "10px", resize: "none" }}
            value={jsonInput}
            onChange={handleJsonInputChange}
            placeholder="Enter JSON data here..."
            rows={10}
            cols={50}
          />
        
        </div>
        <p className="emp-b-movement">Employee Movement Breakdown</p>
        <div className="chart-options-parent">
          <div className="chart-options-child">
            <BsCalendar2Date size={14} />
            <p>2019</p>
          </div>
          <div className="chart-options-child">
            <FaPlus size={12} />
            <p>Add Filters</p>
          </div>
        </div>
      </div>
      <div id="basicBarChart" style={styles} />
    </React.Fragment>
  );
};

export default Chart;
