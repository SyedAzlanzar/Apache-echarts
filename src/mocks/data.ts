import { getRandomId } from "src/utils/helpers";

export const SideNavdata = [
  { id: getRandomId(), name: 'Headcount', value: "+379" },
  {id: getRandomId(), name: 'Starting Headcount', value:"4.85k"},
  {id: getRandomId(), name: 'Ending Headcount', value:"5.23k"},
  { id: getRandomId(), name: 'Net in', value:  "720"},
  { id: getRandomId(), name: 'Net out', value: "348" },
];

export const SideNavAnalyticsdata = [
    { id: getRandomId(), name: 'Scans',color:'#9BEBB4' },
    {id: getRandomId(), name: 'Exits',color:"#FDACAA" },
    {id: getRandomId(), name: 'Discrepancies',color:"#C4C8CF"},
    { id: getRandomId(), name: 'Net Change',color:"#BEDCFE" },
  ];

export const chartMockData = {
  xAxisData:  ["Expantion","Replacement","Involuntary Turnover","Voluntary Turnover","Discrepancies","Net Change"],
  seriesData: [
    {
      name: 'Chart',
      type: 'bar',
      stack: 'Total',
      silent: true,
      barCategoryGap: '3%', // Adjust the gap between bars
      itemStyle: {
        borderColor: 'transparent',
        color: 'transparent'
      },
      emphasis: {
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        }
      },
      data: [0,379,587,355,348,-14]
    },
    {
      name: 'INCOMING',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
        formatter: function (params:any) {
          // Display a '-' sign for expense values
          return params.value > 0 ? '+' + Math.abs(params.value) : params.value;
        }
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
              
      data: [379, 326, "-", '-', '-', "-"]
    },
    {
      name: 'OUTGOING',
      type: 'bar',
      stack: 'Total',
      
      label: {
        show: true,
        position: 'bottom',
        formatter: function (params:any) {
          // Display a '-' sign for expense values
          return params.value > 0 ? '-' + Math.abs(params.value) : params.value;
        }
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
      data: ["-", "-", 118, 232, '-', "-"]
    },
    {
      name: 'Discrepancies',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
        formatter: function (params:any) {
          // Display a '-' sign for expense values
          return params.value > 0 ? '+' + Math.abs(params.value) : params.value;
        }
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
      data: ['-', '-', '-', "-",7, '-']
    },
    {
      name: 'Net Change',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
        formatter: function (params:any) {
          // Display a '-' sign for expense values
          return params.value > 0 ? '+' + Math.abs(params.value) : params.value;
        }
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
      data: ['-', '-', '-', "-",'-', 362]
    }
  ],
}