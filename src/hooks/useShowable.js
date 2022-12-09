import { useState } from "react";

export function useShowable(shown, baseClassName) {
  const [isShown, setIsShown] = useState(shown);
  const toggleShown = () => {
    setIsShown(!isShown);
  };

  return {
    isShown,
    toggleShown,
    setIsShown,
    className: baseClassName + (isShown ? " shown" : ""),
  };
}
