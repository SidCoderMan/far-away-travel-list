import { useState } from "react";

const Form = ({ onSetItems }) => {
  const [desc, setDesc] = useState("");
  const [element, setElement] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (desc === "") return;
    const newItem = { desc, element, packed: false, id: Date.now() };
    console.log(newItem);

    onSetItems(newItem);
    setDesc("");
    setElement(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are ya bringing along?</h3>
      <select
        value={element}
        onChange={(event) => setElement(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      ></input>
      <button> Add </button>
    </form>
  );
};

export default Form;
