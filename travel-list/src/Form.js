import { useState } from "react";

function Form({onAddItems}) {
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    const newItem = { input, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem)
    setInput("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
export default Form;
