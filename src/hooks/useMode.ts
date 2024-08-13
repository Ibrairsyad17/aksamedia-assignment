import { useState } from "react";

export default function useMode() {
  const [mode, setMode] = useState("light");

  const onSelectMode = (mode: string) => {
    setMode(mode);
    if (mode === "light") document.body.classList.remove("bg-black");
    else document.body.classList.add("bg-black");
  };

  return { mode, setMode, onSelectMode };
}
