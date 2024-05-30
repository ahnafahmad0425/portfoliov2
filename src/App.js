import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Interest from "./components/Interest";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="container">
      <Header />
      <Interest />
      <Technologies />
      <Experience />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
