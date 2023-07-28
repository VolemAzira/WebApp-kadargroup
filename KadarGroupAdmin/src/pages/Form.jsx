import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Form() {
  return (
    <div className="h-screen">
      <Sidebar />
      <div className="lg:pl-[20rem] p-5">
        <Card title="Dashboard" style="h-screen">
          <a href="https://docs.google.com/forms/d/1zSJQvnMpM0GpGzhHHrecJmFU5aEdNewA2dU9O2KAtmU/prefill" target="_blank" rel="noopener noreferrer">ISI FORM</a>
        </Card>
      </div>
    </div>
  );
}
