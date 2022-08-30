import React from "react";
import { TileWrapper, TileBackground, TileContent, Tile } from "./Tile";
import { WorkBackground } from "./Work";

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
            <span className="text-9xl">Foo {progress}</span>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <span className="text-9xl">Bar {progress}</span>
          )}
        ></Tile>
      </TileContent>
      <TileContent>Bar</TileContent>
      <TileContent>Test</TileContent>
    </TileWrapper>
  );
};

export default Works;
