import { Flowbite } from "flowbite-react";
import { MyFooter } from "../components/MyFooter";
import { MyNavbar } from "../components/MyNavbar";
import { ptSans } from "../fonts";
import { customTheme } from "../customTheme";

export default function AboutPage() {
  return (
    <div className={ptSans.className}>
      <Flowbite theme={{ theme: customTheme }}>
        <header>
          <MyNavbar />
        </header>
        <main>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </Flowbite>
    </div>
  );
}
