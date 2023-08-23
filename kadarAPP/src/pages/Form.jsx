import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Form() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="pl-16 p-6 gap-5 md:flex">
        <Card style="w-[20rem]">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            iste harum in pariatur consectetur consequatur.
          </p>
          <br />
          <Button>
            <a
              href="https://docs.google.com/forms/d/1zSJQvnMpM0GpGzhHHrecJmFU5aEdNewA2dU9O2KAtmU/prefill"
              target="_blank"
              rel="noopener noreferrer"
            >
              FORM 1
            </a>
          </Button>
        </Card>
        <Card style="w-[20rem]">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            iste harum in pariatur consectetur consequatur.
          </p>
          <br />
          <Button>
            <a
              href="https://docs.google.com/forms/d/1zSJQvnMpM0GpGzhHHrecJmFU5aEdNewA2dU9O2KAtmU/prefill"
              target="_blank"
              rel="noopener noreferrer"
            >
              FORM 2
            </a>
          </Button>
        </Card>
        <Card style="w-[20rem]">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            iste harum in pariatur consectetur consequatur.
          </p>
          <br />
          <Button>
            <a
              href="https://docs.google.com/forms/d/1zSJQvnMpM0GpGzhHHrecJmFU5aEdNewA2dU9O2KAtmU/prefill"
              target="_blank"
              rel="noopener noreferrer"
            >
              FORM 3
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
}
