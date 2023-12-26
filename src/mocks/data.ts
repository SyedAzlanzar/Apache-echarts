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

