import React, { useEffect, useState } from "react";
import NavItem from "../ui/NavItem";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { logout } from "../../redux/slice/authSlice";
import "../../styles/complix/navigation.css";

const authNavItem = [
  { id: 1, title: "خانه", link: "/ImageWall", func: () => {} },
  { id: 2, title: "گزارش ها", link: "/reports", func: () => {} },
  { id: 3, title: "ارتباط با ما", link: "/ContactUs", func: () => {} },
  {
    id: 4,
    title: "خروج",
    link: "/",
    func: () => {
      store.dispatch(logout());
    },
  },
];

const NavItems = [
  { id: 1, title: "ورود", link: "/", func: () => {} },
  { id: 2, title: "درباره ما", link: "/AboutUs", func: () => {} },
  { id: 3, title: "ارتباط با ما", link: "/ContactUs", func: () => {} },
];

function Navigation({ items, className }) {
  const [isNavVisible, setNavVisibility] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { accessToken } = useSelector((store) => store.auth);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setNavVisibility(scrollPosition > currentScrollPos || currentScrollPos < 10);
    setScrollPosition(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`nav ${className} ${isNavVisible ? "visible" : "hidden"}`}>
      <Container className={"navContainer"}>
        <Logo />
        <NavItem items={accessToken ? authNavItem : NavItems} />
      </Container>
    </div>
  );
}

export default Navigation;
