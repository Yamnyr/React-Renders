import { useState } from "react";

// eslint-disable-next-line import/prefer-default-export
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
