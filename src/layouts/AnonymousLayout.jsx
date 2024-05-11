import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import GlassCover from "../components/ui/GlassCover";
import Container from "../components/ui/Container";
import Navigation from "../components/complix/Navigation";
import Footer from "../components/ui/Footer";
import BackGroundImg from "../components/ui/BackGroundImg";
import "../styles/layouts/anonymousLayout.css";

function AnonymousLayout() {
  return (
    <BackGroundImg className={`backGroundImg`}>
      <GlassCover className={`glassCover`}>
        <Navigation />
        <Container className={`containerWapper`}>
          <Outlet />
        </Container>
        <Footer />
      </GlassCover>
    </BackGroundImg>
  );
}

export default AnonymousLayout;
