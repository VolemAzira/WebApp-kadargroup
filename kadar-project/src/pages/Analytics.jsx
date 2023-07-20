import React from "react";
import Sidebar from "../components/Elements/Sidebar";
import Card from "../components/Elements/Card";

export default function Analytics() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[22rem] p-10">
        <Card style="flex">
          <div>
            <h3>Total Sales</h3>
            <h1>$65,024</h1>
          </div>
          <div>
            <svg className="w-3">
              <circle cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="relative rounded-[50%]">
              <p>+81%</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
