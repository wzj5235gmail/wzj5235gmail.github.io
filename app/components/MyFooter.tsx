import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

export function MyFooter() {
  return (
    <section className="footer">
      <Footer container className="pt-16">
        <div className="w-full">
          <div className="grid grid-cols-1 w-full md:flex md:justify-evenly">
            <div className="justify-self-center mb-8 md:me-8">
              <div
                className="w-56 h-28 mb-6 rounded-lg"
                style={{
                  backgroundImage: 'url("logo/png/logo-color.png")',
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="block md:block justify-between">
              <FooterTitle title="contact us" />
              <FooterLinkGroup col>
                <FooterLink href="#">
                  <LocalPhoneIcon className="h-6 me-2" />
                  <span>604-522-6615</span>
                </FooterLink>
                <FooterLink href="#">
                  <EmailIcon className="h-6 me-2" />
                  <span>abc@abc.com</span>
                </FooterLink>
                <FooterLink href="#">
                  <div className="flex">
                    <HomeIcon className="h-6 me-2" />
                    <span>
                      6200 Buckingham Dr
                      <br />
                      Burnaby, BC, V5E 2A4
                      <br />
                      Canada
                    </span>
                  </div>
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <FooterDivider className="md:hidden" />
            <div className="block md:block justify-between">
              <FooterTitle title="Follow us" />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsInstagram} />
                <FooterIcon href="#" icon={BsTwitter} />
              </div>
            </div>
          </div>
          <FooterDivider className="md:hidden" />
          <div className="w-full sm:flex sm:items-center sm:justify-center mt-24">
            <FooterCopyright
              href="#"
              by="2nd Home Bilingual Childcare"
              year={2024}
            />
          </div>
        </div>
      </Footer>
    </section>
  );
}
