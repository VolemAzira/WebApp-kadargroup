import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <div className="pl-16 p-6 h-screen">
        <iframe
          src="https://docs.google.com/spreadsheets/d/1KSctOeulcsmDIDd8PnmaTysllh7ckDurCgr1WHzAWCU/edit#gid=1992696286"
          className="w-full h-full border-2 shadow-md rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
