import React from "react";
import { Table } from "antd";

import filter from "../../assets/filter.png";
import type { TableProps } from "antd";
const dataObject = [
  {
    key: "1",
    Cashier: "Eren Jaegar",
    Item: "Flat White",
    Unit: "$4",
    Qty: 1,
    Amount: "$5",
    Status: "Pending",
  },
  {
    key: "2",
    Cashier: "Reiner Braunn",
    Item: "Coffee Late",
    Unit: "$3",
    Qty: 2,
    Amount: "$4",
    Status: "Preparing",
  },
  {
    key: "3",
    Cashier: "Levi Ackerman",
    Item: "Cappucino",
    Unit: "$2",
    Qty: 2,
    Amount: "$3",
    Status: "Completed",
  },
  {
    key: "1",
    Cashier: "Eren Jaegar",
    Item: "Flat White",
    Unit: "$4",
    Qty: 1,
    Amount: "$5",
    Status: "Pending",
  },
  {
    key: "2",
    Cashier: "Reiner Braunn",
    Item: "Coffee Late",
    Unit: "$3",
    Qty: 2,
    Amount: "$4",
    Status: "Preparing",
  },
];
interface DataType {
  key: string;
  Cashier: string;
  Item: string;
  Unit: string;
  Qty: number;
  Amount: string;
  Status: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Cashier",
    dataIndex: "Cashier",
    key: "Cashier",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Item",
    dataIndex: "Item",
    key: "Item",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Unit Price",
    dataIndex: "Unit",
    key: "Unit",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Qty",
    key: "Qty",
    dataIndex: "Qty",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Total Amount",
    dataIndex: "Amount",
    key: "Amount",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];

const data: DataType[] = dataObject;

function RecentTable() {
  return (
    <div className=" rounded shadow-lg bg-white p-4 mt-6">
      <div className="flex items-center justify-between pb-3">
        <h1 className="font-bold text-2xl">Recent Activities</h1>{" "}
        <button className=" flex flex-row gap-1 items-center justify-center   bg-[#C67C4E] text-white px-4 py-2 rounded-md">
          <img src={filter} alt="filter" className="h-3 w-4 text-white" />
          <h1 className="text-lg">Filter Order</h1>
        </button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default RecentTable;
