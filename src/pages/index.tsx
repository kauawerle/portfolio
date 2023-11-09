import HeroComponent from "@/components/HeroComponent";
import NavigationComponent from "@/components/navbar";
import localFont from "@next/font/local";

interface navigationProps {
  name?: string;
  href?: string;
  isActivate?: boolean;
}

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
    </>
  </html>
);

export default IndexPage
