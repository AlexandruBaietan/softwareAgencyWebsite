import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./clientLogo/Slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/iphone.jfif"
          width={150}
          height={50}
          alt="AnotherImage"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/iphone.jfif"
          width={150}
          height={50}
          alt="AnotherImage"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/iphone.jfif"
          width={150}
          height={50}
          alt="AnotherImage"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/iphone.jfif"
          width={150}
          height={50}
          alt="AnotherImage"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/iphone.jfif"
          width={150}
          height={50}
          alt="AnotherImage"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/iphone.jfif"
          width={150}
          height={50}
          alt="AnotherImage"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
