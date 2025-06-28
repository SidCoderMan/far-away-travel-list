const Item = ({ item, onDeleteItem, onItemPacked }) => {
  console.log({ item });
  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={item.packed}
        onChange={() => onItemPacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.element} {item.desc}
      </span>
      <button style={{ color: "white" }} onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
};
export default Item;
