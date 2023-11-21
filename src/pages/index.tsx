import { AboutComponent } from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import ProjectsComponents from "@/components/ProjectsComponent";
import { navigationProps } from "@/interfaces/navigationProps";
import localFont from "@next/font/local";
import { useState } from "react";

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

const IndexPage = () => {
  const [showAboutSection, setShowAboutSection] = useState(false);

  const handleInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    if (inputValue === "yes" || inputValue === "y") {
      setShowAboutSection(true);
    } else if (inputValue === "no" || inputValue === "n") {
      alert("Putz kk")
    }
  };
  return (
    <html className={cascadia.variable}>
      <>
        {/* <NavigationComponent navigation={navigation} /> */}
        <HeroComponent onInput={handleInput} />
        {showAboutSection && <AboutComponent />}
        {showAboutSection && <ProjectsComponents />}
        {showAboutSection && <FooterComponent />}

      </>
    </html>
  );
};

export default IndexPage;
