import { useRef } from "react";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";
import Year from "../components/Year";

function Blog() {
  return (
    <div className="w-full bg-brand-50 px-[11vw]">
      <HeroSection />
      <div
        className="flex w-full justify-between pb-[19rem] pt-[17.7rem]"
        id="container"
      >
        <Year>2024</Year>
        <ul className="mt-[-9rem] h-full list-none sm:w-[67.8%]">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>{" "}
    </div>
  );
}

export default Blog;
