import HeroComponent from "@/components/HeroComponent";
import ProjectsComponents from "@/components/ProjectsComponent";
import NavigationComponent from "@/components/navbar";
import { navigationProps } from "@/interfaces/navigationProps";
import localFont from "@next/font/local";

const cascadia = localFont({
  src: [
    {
      path: "../fonts/cascadia-code.ttf",
      weight: "800",
    },
  ],
  variable: "--font-helvetica",
});

const navigation: navigationProps[] = [
  {
    name: "Home",
    href: "#",
    isActivate: true,
  },
  {
    name: "Projects",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const IndexPage = () => (
  <html className={cascadia.variable}>
    <>
      <NavigationComponent navigation={navigation} />
      <HeroComponent />
      <ProjectsComponents/>
    </>
  </html>
);

export default IndexPage
