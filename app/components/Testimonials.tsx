import { Divider } from "@mui/material";
import { ptSerif } from "../fonts";
import { TestimonialCard } from "./TestimonialCard";

const testimonialList = [
  {
    name: "Emily Johnson",
    content:
      "This kindergarten has been amazing for my daughter. The teachers are caring and the activities are engaging. She looks forward to going to school every day!",
    img: "/img/avatar-1.jpg",
  },
  {
    name: "Michael Lee",
    content:
      "We love this kindergarten! The environment is nurturing and the staff is wonderful. Our son has learned so much and made great friends.",
    img: "/img/avatar-2.jpg",
  },
  {
    name: "Sophia Martinez",
    content:
      "The curriculum is well-rounded, and the teachers are very supportive. My child has developed a strong foundation and a love for learning. Highly recommend!",
    img: "/img/avatar-3.jpg",
  },
  {
    name: "David Brown",
    content:
      "A fantastic place for early childhood education. The staff is attentive, and the facilities are excellent. My child enjoys every moment here.",
    img: "/img/avatar-4.jpg",
  },
];

export default function Testimonials() {
  return (
    <div
      // className="bg-color3 md:bg-testimonials-bg md:bg-cover md:bg-fixed "
      className="bg-testimonials-bg bg-cover bg-fixed"
    >
      {/* <div className="md:inset-0 md:bg-black md:bg-opacity-50"> */}
      <div className="inset-0 bg-black bg-opacity-50">
        <div className="py-16 px-8">
          <div className={ptSerif.className}>
            <h2 className="text-4xl md:text-5xl mb-4 text-center md:mt-16 text-color4 ">
              What Parents Say
            </h2>
            <Divider className="w-48 md:w-56 mx-auto border-2 mb-16 border-color3" />
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8 md:my-8 md:w-[90%] lg:w-[66%] md:mx-auto">
            {testimonialList.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
