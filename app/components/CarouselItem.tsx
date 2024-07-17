import { Button } from "flowbite-react";
import { ptSans, ptSerif } from "../fonts";

interface CarouselItemProps {
  img: string;
  title: string;
  content: string;
}

export default function CarouselItem({
  img,
  title,
  content,
}: CarouselItemProps) {
  return (
    <div>
      <img src={img} alt="..." />
      <div className="absolute bg-black bg-opacity-50 inset-0 text-white flex justify-center items-center">
        <div className="w-[66%]">
          <div className={ptSerif.className}>
            <h3 className="text-3xl mb-2 md:mb-4 md:text-4xl lg:text-6xl lg:mb-6 text-color4">
              {title}
            </h3>
          </div>
          <div className={ptSans.className}>
            <p className="mb-2 md:mb-4 lg:mb-6">{content}</p>
          </div>
          <Button className="bg-color4 text-black hover:bg-color5">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
