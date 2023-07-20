import React from "react";
import Card from "../components/Elements/Card";
import Sidebar from "../components/Elements/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[22rem] p-10">
        <Card>
          <h1>Selamat datang di website admin</h1>
        </Card>
      </div>
    </div>
  );
}
