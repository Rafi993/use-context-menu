import { useEffect, useCallback, useState } from "react";

const useContextMenu = outerRef => {
  const [Xpos, setXPos] = useState(0);
  const [Ypos, setYPos] = useState(0);
  const [menu, showMenu] = useState(false);

  const handleContextMenu = useCallback(
    event => {
      event.preventDefault();
      if (outerRef && outerRef.current.contains(event.target)) {
        setXPos(event.clientX);
        setYPos(event.clientY);
        showMenu(true);
      } else {
        showMenu(false);
      }
    },
    [showMenu, outerRef, setXPos, setYPos]
  );

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { Xpos, Ypos, menu };
};

export default useContextMenu;
