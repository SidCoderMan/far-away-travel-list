const Stats = ({ items }) => {
  const itemsCount = items.length;
  console.log(itemsCount);
  const packedCount = items.filter((item) => item.packed).length;
  const percentage = itemsCount === 0 ? 0 : (packedCount / itemsCount) * 100;

  if (itemsCount === 0) {
    return (
      <footer className="stats">
        <em>Don't wait! Get packing!</em>
      </footer>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percentage < 100
          ? `You have ${itemsCount} items on your list, you have already packed ${packedCount} (${percentage}%)`
          : "Congrats! You're all ready to go! Bon Voyage!"}
      </em>
    </footer>
  );
};
export default Stats;
