import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Form() {
  return (
    <div className="h-screen">
      <div className="pl-16 p-6 h-screen">
        <Card title="form" style="h-screen">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dicta nemo consectetur ea recusandae dolor.</p> <br />
          <a href="https://docs.google.com/forms/d/1zSJQvnMpM0GpGzhHHrecJmFU5aEdNewA2dU9O2KAtmU/prefill" target="_blank" rel="noopener noreferrer">ISI FORM</a>
        </Card>
      </div>
    </div>
  );
}
