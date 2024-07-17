import { Carousel } from "flowbite-react";
import CarouselItem from "./CarouselItem";

const carouselItems = [
  {
    img: "img/4.jpg",
    title: "Welcome Young Learners",
    content: "Our kindergarten nurtures curiosity and creativity in children.",
  },
  {
    img: "img/2.jpg",
    title: "Growing Together Happily",
    content: "At our kindergarten, children explore and learn through play. ",
  },
  {
    img: "img/5.jpg",
    title: "Learning and Playing",
    content:
      "Our kindergarten offers a nurturing environment for learning and playing. ",
  },
];

export function MyCarousel() {
  return (
    <section className="navbar h-[66vw] lg:h-[33vw]">
      <Carousel className="carousel">
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} {...item} />
        ))}
      </Carousel>
    </section>
  );
}
