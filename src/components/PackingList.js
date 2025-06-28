import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onItemPacked, onResetItems }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems =
    sortBy === "input"
      ? items
      : sortBy === "desc"
      ? items.slice().sort((a, b) => a.desc.localeCompare(b.desc))
      : items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onItemPacked={onItemPacked}
              key={item.id}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">
              Sort by <em>input order</em>
            </option>
            <option value="desc">
              Sort by <em>description</em>
            </option>
            <option value="packed">
              Sort by <em>packed status</em>
            </option>
          </select>
          <button
            onClick={() => {
              onResetItems(items);
            }}
          >
            Clear List
          </button>
        </div>
      </div>
    </>
  );
};

export default PackingList;
