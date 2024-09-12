function Stats({ items }) {
  console.log(items)
  const a = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        {items.length === 0
          ? "Start adding items to your packing list💼"
          : items.length !== a
          ? `💼 You have ${
              items.length
            } items in your list, and you have packed ${a} (${
              (a / items.length).toFixed(2) * 100
            } %)`
          : `You have packed everything. Let's go! ✈`}
      </em>
    </footer>
  );
}
export default Stats;
