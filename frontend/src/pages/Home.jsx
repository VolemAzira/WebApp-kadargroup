import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-[20rem] p-10">
        <Card title="hello">
          <h1>Selamat datang di website admin</h1>
        </Card>
      </div>
    </div>
  );
}
