import React from "react";
import ClientLogos from "./trustedBy/ClientLogos";
import Testimonials from "./trustedBy/Testimonials";
import styles from "styles/trustedBy.module.css";

const TrustedBy: React.FC = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${styles.bg}`}
  >
    <div className="flex-1"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 font-bold text-center">
        <span className="whitespace-nowrap">Trusted By</span>{" "}
        <span className="whitespace-nowrap">
          some of the apps you are using daily
        </span>
      </h3>
      <ClientLogos />
      <div>Logos</div>
    </div>
    <div className="fkex flex-col justify-center items-center">
      <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[2.5rem]">
          We believe in good ocmmunication and a fully transpatend development
          process.
        </h3>
      </div>
    </div>
    <Testimonials />
    <div className="flex-1 bg-black"></div>
  </section>
);

export default TrustedBy;
