import { Divider } from "@mui/material";
import { ptSerif } from "../fonts";
import { CampusCard } from "./CampusCard";

export default function Campuses() {
  const campuses = [
    {
      img: "img/campus-1.jpeg",
      title: "First Campus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "img/campus-2.jpeg",
      title: "Second Campus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "img/campus-3.jpeg",
      title: "Third Campus",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="campuses w-full h-1/3 flex justify-center items-center py-16 lg:py-16 bg-color5">
      <div>
        <div className={ptSerif.className}>
          <h2 className="text-4xl lg:text-5xl text-center mb-4 text-white">
            Our Campuses
          </h2>
          <Divider className="w-48 md:w-56 mx-auto border-2 mb-16 border-color4" />
        </div>
        <div className="md:grid md:grid-cols-2 xl:flex gap-8 mx-8">
          {campuses.map((campus, index) => (
            <CampusCard {...campus} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
