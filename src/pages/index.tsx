import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import localFont from "@next/font/local";

import { AboutComponent } from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import ProjectsComponents from "@/components/ProjectsComponent";
import { navigationProps } from "@/interfaces/navigationProps";

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
      toast.dark("Conquista Desbloqueada! 🚀", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setShowAboutSection(true);
    } else if (inputValue === "no" || inputValue === "n") {
      toast.error("😭😭", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <html className={cascadia.variable}>
      <>
        {/* <NavigationComponent navigation={navigation} /> */}
        <HeroComponent onInput={handleInput} />
        <ToastContainer />
        {showAboutSection && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <AboutComponent />
            <ProjectsComponents />
            <FooterComponent />
          </React.Suspense>
        )}
      </>
    </html>
  );
};

export default IndexPage;
