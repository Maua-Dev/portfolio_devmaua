import "./App.css";
import HomeComponent from "./pages/home/HomeComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";
import AboutUsComponent from "./pages/aboutUs/AboutUsComponent";
import ProjectsComponent from "./pages/projects/ProjectsComponent";
import MembersComponent from "./pages/members/MembersComponent";
import ContactComponent from "./pages/contact/ContactComponent";
import FooterComponent from "./pages/footer/FooterComponent";
import ModalOnLoad from "./components/modal/ModalOnLoad";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <ModalOnLoad />
      <HomeComponent />
      <AboutUsComponent />
      <ProjectsComponent />
      <MembersComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
