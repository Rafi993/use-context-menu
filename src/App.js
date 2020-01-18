import React, { useRef } from "react";

import Menu from "./Menu";

function App() {
  const outerRef = useRef(null);

  return (
    <div ref={outerRef} className="app">
      <Menu outerRef={outerRef} />
    </div>
  );
}

export default App;
