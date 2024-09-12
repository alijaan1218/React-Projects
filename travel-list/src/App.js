import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackagingList from "./PackagingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  function clearItems(){
    let confirmed = window.confirm("Are you sure that you want to delete all items?")
    if (confirmed) setItems([]);
  }
  function deleteItems(id) {
    setItems((items) => items.filter((a) => a.id !== id));
  }
  function toggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackagingList
        items={items}
        onDeleteItem={deleteItems}
        onToggleItems={toggleItems}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
