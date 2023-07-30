import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Rumah from "../assets/Rumah.svg";

export default function Home() {
  return (
    <div>
      <div className="pl-16 p-6 h-screen flex items-center justify-center">
        <Card>
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-7">
            <img src={Rumah} alt="gambar" width={"400rem"} />
            <div className="max-w-2xl">
              <h1 className="text-2xl text-center font-bold my-4 uppercase md:text-left">
                Selamat datang di website admin
              </h1>
              <p className="text-justify mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                laborum dicta eum suscipit fuga optio hic, ab, impedit labore
                officiis aliquam. Quae, beatae sunt veniam, amet, saepe vero
                animi accusamus nostrum blanditiis libero tempora at perferendis
                possimus! Cupiditate, consequatur neque. Debitis alias mollitia
                nihil quaerat earum architecto sunt quae eos!
              </p>
              <Button>See More</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
