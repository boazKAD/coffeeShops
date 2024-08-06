import React from "react";
import Layout from "../components/Layout/Layout";
import { DatePicker } from "antd";
import "./antdStyles.css";
import { LuCircleDollarSign } from "react-icons/lu";
import Cards from "../components/Dashboard/Cards";
import RecentTable from "../components/Dashboard/RecentTable";

function Dashboard() {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="gap-3">
            <h1 className="font-bold text-[24px]">Dashboard</h1>
            <h2 className="text-[16px]">Tuesday 2 Feb, 2021</h2>
          </div>
          <div>
            <DatePicker
              onChange={onChange}
              className="custom-datepicker bg-[#FAF9F8] border-[#C67C4E] h-[52px] p-4 rounded-lg text-lg w-[242px]"
            />
          </div>
        </div>
        <div className="">
          <div className="flex gap-6 mt-4">
            <Cards
              title="RWF 10,243.00"
              name="Total Revenue"
              perc="+32.40%"
              Icon={LuCircleDollarSign}
              style={"text-[#9288E0] w-6 h-6"}
            />
            <Cards
              title="RWF 10,243.00"
              name="Total Revenue"
              perc="+32.40%"
              Icon={LuCircleDollarSign}
              style={"text-[#9288E0] w-6 h-6"}
            />
            <Cards
              title="RWF 10,243.00"
              name="Total Revenue"
              perc="+32.40%"
              Icon={LuCircleDollarSign}
              style={"text-[#9288E0] w-6 h-6"}
            />
          </div>

          <RecentTable />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
