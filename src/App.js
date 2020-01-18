import React, { useRef } from "react";

import useContextMenu from "./useContextMenu";

function App() {
  const outerRef = useRef(null);
  const { Xpos, Ypos, menu } = useContextMenu(outerRef);

  return (
    <div ref={outerRef} className="app">
      {Xpos}
      {"     "}
      {Ypos}
      {"       "}
      {JSON.stringify(menu)}
    </div>
  );
}

export default App;
