import React from "react";

import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Analytics() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[20rem] p-5">
      <Card title="Analytics" style="h-screen">
          <iframe
            src="https://lookerstudio.google.com/embed/reporting/e3822fc4-1da1-48fe-8b6e-19450025da0a/page/p_d7whwn6m4c"
            className="w-full h-full"
          ></iframe>
        </Card>
      </div>
    </div>
  );
}
