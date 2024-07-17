import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { ptSerif } from "../fonts";

export function MyNavbar() {
  return (
    <section className="navbar">
      <Navbar fluid className="bg-color5">
        <NavbarBrand as={Link} href="/">
          <div
            className="w-32 h-16 bg-cover bg-center"
            style={{
              backgroundImage: "url(logo/svg/logo-color.svg)",
            }}
          ></div>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse className={ptSerif.className}>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="#">
            About
          </NavbarLink>
          <NavbarLink href="#">Campuses</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </section>
  );
}
