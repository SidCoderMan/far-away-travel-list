import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
const App = () => {
  const [items, setItems] = useState([]);

  const handleSetItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems(items.filter((item) => id !== item.id));
  };

  const handleItemPacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleResetItems = (item) => {
    const confirmed = window.confirm(
      "Woah there! Are you sure you want to clear your list!?"
    );
    if (confirmed) {
      setItems((items) => []);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onSetItems={handleSetItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onItemPacked={handleItemPacked}
        onResetItems={handleResetItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
