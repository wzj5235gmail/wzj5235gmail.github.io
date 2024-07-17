import { ptSerif } from "../fonts";

export default function Hero() {
  return (
    <div className="hero w-full h-1/3 flex justify-center items-center pb-16 lg:py-16 bg-color5">
      <div className="w-[66%] lg:grid lg:grid-cols-5 lg:gap-4">
        <div
          className="min-h-48 max-h-50 lg:min-h-80 w-full my-4 mx-auto col-span-2 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("logo/svg/logo-color.svg")',
          }}
        ></div>
        <div className="col-span-3 flex flex-col justify-center mx-auto">
          <div className={ptSerif.className}>
            <h1 className="text-4xl lg:text-5xl mb-4 text-white">
              Play, Learn, and Thrive
            </h1>
          </div>
          <p className="text-white">
            Our kindergarten is dedicated to fostering a love for learning in
            every child. We offer a rich curriculum filled with hands-on
            activities, creative projects, and interactive play. Our experienced
            teachers create a warm and supportive atmosphere where children feel
            safe to explore, ask questions, and develop new skills. Join us for
            a journey of discovery and growth, where every child is encouraged
            to reach their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}
