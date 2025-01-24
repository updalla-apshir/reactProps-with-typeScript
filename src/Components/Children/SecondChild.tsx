import { useContext, useRef } from "react";
import { Button } from "../ui/button";
import { themeContext } from "../Context/ThemeContext";
import { Input } from "../ui/input";

const SecondChild = () => {
  const { state, dispatch } = useContext(themeContext);
  const fontSizeInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "change_theme" });
    const fontSize = parseInt(fontSizeInputRef.current?.value || "16");
    dispatch({ type: "change_fontSize", payload: fontSize });
  };
  console.log(state);

  return (
    <div>
      <Button onClick={handleClick}>Change Them</Button>
      <Input
        placeholder="Change Font Size"
        ref={fontSizeInputRef}
        type="number"
        className="w-[20rem]"
      />
    </div>
  );
};

export default SecondChild;
