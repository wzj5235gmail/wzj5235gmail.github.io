import { Card } from "flowbite-react";
import { ptSans, ptSerif } from "../fonts";

interface CampusCardProps {
  img: string;
  title: string;
  content: string;
}

export function CampusCard({ img, title, content }: CampusCardProps) {
  return (
    <Card
      className="max-w-sm mb-8 md:mb-0 hover:scale-105 transition-all border-none shadow-lg"
      imgAlt="campuse image"
      imgSrc={img}
    >
      <div className={ptSerif.className}>
        <h5 className="text-3xl tracking-tight text-black dark:text-white">
          {title}
        </h5>
      </div>
      <div className={ptSans.className}>
        <p className="font-normal text-black dark:text-gray-400">{content}</p>
      </div>
    </Card>
  );
}
