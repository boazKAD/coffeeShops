import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MostOrderChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    series: [90, 80, 57],
    colors: ["#FF4560", "#FFA500", "#1C64F2"],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#E5E7EB',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
      },
    },
    labels: ["Dine In", "Takeaway", "Delivery"],
  };

  const descriptions = [
    { label: "Dine In", value: "200 customers", color: "#FF7CA3" },
    { label: "Takeaway", value: "122 customers", color: "#FFB572" },
    { label: "Delivery", value: "264 customers", color: "#65B0F6" },
  ];

  return (
    <div className="flex items-center p-2 bg-white rounded shadow">
      <div id="radial-chart">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="radialBar"
          height={250}
        />
      </div>
      <div className="xml-4">
        {descriptions.map((desc) => (
          <div key={desc.label} className="flex items-center">
            <span
              className="inline-block w-3 h-3 mr-2 rounded-full"
              style={{ backgroundColor: desc.color }}
            ></span>
            <div>
              <div className="text-sm font-medium">{desc.label}</div>
              <div className="text-xs text-gray-500">{desc.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostOrderChart;
