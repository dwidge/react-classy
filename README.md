# @dwidge/react-classy

Lite styled components for React

## demo

```js
import React from "react";
import { div } from "@dwidge/react-classy";
import "@dwidge/react-classy/flex.css";

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
```

# components

div img canvas

# classes

flex stretch center vertical horizontal absolute
