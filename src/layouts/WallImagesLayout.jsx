import React from "react";
import { Outlet } from "react-router";
import GlassCover from "../components/ui/GlassCover";
import Container from "../components/ui/Container";
import Navigation from "../components/complix/Navigation";
import Footer from "../components/ui/Footer";
import BackGroundImg from "../components/ui/BackGroundImg";
import "../styles/layouts/wallImagesLayout.css";

function WallImagesLayout() {
  return (
    <BackGroundImg>
      <GlassCover className={"glassCoverWallImageLayout"}>
        <Navigation className={"navitationWallImageLayout"} />
        <Container className={"containerWallImageLayout"}>
          <Outlet />
        </Container>
        <Footer className={"footerWallImageLayout"} />
      </GlassCover>
    </BackGroundImg>
  );
}

export default WallImagesLayout;
