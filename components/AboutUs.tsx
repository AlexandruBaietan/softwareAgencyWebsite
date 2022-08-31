import React from "react";
import Member from "./aboutUs/Member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong>
          Our team of expert engineers has created the best user experiences in
          som eof the most popular apps worldwide
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Out team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-20">
          <Member
            id="0"
            name="Alex"
            socialId="@Baietan"
            link="https://github.com/alexandrubaietan"
          />
          <Member
            id="0"
            name="Marius"
            socialId="@Marius"
            link="https://github.com/alexandrubaietan"
          />
          <Member
            id="0"
            name="Ghita"
            socialId="@Ghita"
            link="https://github.com/alexandrubaietan"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
