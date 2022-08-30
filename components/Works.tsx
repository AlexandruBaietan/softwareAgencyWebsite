import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./works/Tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "./works/Work";
import Image from "next/image";

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We built</div>
                <div className="text-4xl md: text-5xl font-semibold track-tight">
                  <WorkLink href="https://www.google.com/">
                    Pink Pands&apos;s app
                  </WorkLink>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/iphone.jfif"
                  width={840}
                  height={900}
                  alt="Pink panda"
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We made</div>
                <div className="text-4xl md: text-5xl font-semibold track-tight">
                  Steakwallet&nbsp; faster
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/iphone.jfif"
                  width={840}
                  height={900}
                  alt="Steakwallet"
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We helped</div>
                <div className="text-4xl md: text-5xl font-semibold track-tight">
                  Showtime&nbsp;ship faster
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/iphone.jfif"
                  width={840}
                  height={900}
                  alt="Steakwallet"
                  layout="responsive"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
