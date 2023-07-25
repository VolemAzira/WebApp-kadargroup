import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="h-screen">
      <Sidebar />
      <div className="lg:pl-[20rem] p-5">
        <Card title="Dashboard" style="h-screen">
          <iframe
            src="https://docs.google.com/spreadsheets/d/1KSctOeulcsmDIDd8PnmaTysllh7ckDurCgr1WHzAWCU/edit?usp=sharing"
            className="w-full h-full"
          ></iframe>
        </Card>
      </div>
    </div>
  );
}
