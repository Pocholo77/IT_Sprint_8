import React from "react";
import Ships from "../../components/ships/Ships";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/footer/Footer";

export default function home() {
  return (
 
      <div>
        <HeaderSection />
        <Ships />
        <Footer />
      </div>
    
  );
}
