import { div } from "@dwidge/react-classy";
import React from "react";

const App: React.FC<{}> = () => {
  return (
    <Background>
      <Foreground>Hi. Bi.</Foreground>
    </Background>
  );
};

const Background = div("flex center", {
  background: "navy",
});

const Foreground = div("flex stretch vertical", {
  minHeight: "90%",
  maxWidth: "90%",
  background: "red",
});

export default App;
