import React from "react";
import { Outlet } from "react-router";
import GlassCover from "../components/ui/GlassCover";
import Container from "../components/ui/Container";
import Navigation from "../components/complix/Navigation";
import Footer from "../components/ui/Footer";
import BackGroundImg from "../components/ui/BackGroundImg";
import chartImg from "../components/images/chart.jpg";
import "../styles/layouts/ReportsLayout.css";



function ReportsLayout() {
  return (
    <BackGroundImg src={chartImg}>
      <GlassCover className={"glassCoverReportsLayout"}>
        <Navigation className={"navitationReportsLayout"} />
        <Container>
          <Outlet />
        </Container>
        <Footer className={"footerReportsLayout"} />
      </GlassCover>
    </BackGroundImg>
  );
}

export default ReportsLayout;
