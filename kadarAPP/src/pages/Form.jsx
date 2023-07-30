import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Form() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="pl-16 p-6">
        <Card title="FORM PAGE" style="">
          <div className="flex flex-col justify-center items-center gap-10">
            <Button>
              <a
                href="https://docs.google.com/forms/d/1zSJQvnMpM0GpGzhHHrecJmFU5aEdNewA2dU9O2KAtmU/prefill"
                target="_blank"
                rel="noopener noreferrer"
              >
                FORM 1
              </a>
            </Button>
            <Button>
              <a href="" target="_blank" rel="noopener noreferrer">
                FORM 2
              </a>
            </Button>
            <Button>
              <a href="" target="_blank" rel="noopener noreferrer">
                FORM 3
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
