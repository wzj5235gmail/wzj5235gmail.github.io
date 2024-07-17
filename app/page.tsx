import { customTheme } from "./customTheme";
import { MyNavbar } from "./components/MyNavbar";
import { Flowbite } from "flowbite-react";
import { MyCarousel } from "./components/MyCarousel";
import { MyFooter } from "./components/MyFooter";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Campuses from "./components/Campuses";
import Testimonials from "./components/Testimonials";
import { ptSans } from "./fonts";

export default function Home() {
  return (
    <div className={ptSans.className}>
      <Flowbite theme={{ theme: customTheme }}>
        <header>
          <MyNavbar />
        </header>
        <main>
          <MyCarousel />
          <Hero />
          <Video />
          <Campuses />
          <Testimonials />
        </main>
        <footer>
          <MyFooter />
        </footer>
      </Flowbite>
    </div>
  );
}
