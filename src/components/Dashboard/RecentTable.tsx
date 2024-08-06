import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
const dataObject =[
    {
      key: "1",
      Cashier: "Eren Jaegar",
      Item: "Flat White",
      Unit: "$4",
      Qty: 1,
      Amount:"$5",
      Status:"Pending"
    },
    {
      key: "2",
      Cashier: "Reiner Braunn",
      Item: "Coffee Late",
      Unit: "$3",
      Qty: 2,
      Amount:"$4",
      Status:"Preparing"
    },
    {
      key: "3",
      Cashier: "Levi Ackerman",
      Item: "Cappucino",
      Unit: "$2",
      Qty: 2,
      Amount:"$3",
      Status:"Completed"
    },
    {
        key: "1",
        Cashier: "Eren Jaegar",
        Item: "Flat White",
        Unit: "$4",
        Qty: 1,
        Amount:"$5",
        Status:"Pending"
      },
      {
        key: "2",
        Cashier: "Reiner Braunn",
        Item: "Coffee Late",
        Unit: "$3",
        Qty: 2,
        Amount:"$4",
        Status:"Preparing"
      },
      {
        key: "3",
        Cashier: "Levi Ackerman",
        Item: "Cappucino",
        Unit: "$2",
        Qty: 2,
        Amount:"$3",
        Status:"Completed"
      },
]
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

const data: DataType[] = dataObject

function RecentTable() {
  return (
    <div className="overflow-x-auto w-[1186px] mt-6">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default RecentTable;
