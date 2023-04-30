import React from "react";
import { NavBar, Hero, Search, Notes, Footer } from "./Components";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="px-[3rem]">
        <Hero />
        <Notes />
        <Footer />
      </div>
    </>
  );
};

export default App;
