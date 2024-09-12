import { useState } from "react";

export default function Text({ children }) {
  const [text, setText] = useState(true);
  return (
    <>
      {text ? children : children.split(" ").slice(0, 5).join(" ") + "..."}
      <button onClick={() => setText(!text)}>
        {text ? "Show less" : "Show More"}
      </button>
    </>
  );
}
