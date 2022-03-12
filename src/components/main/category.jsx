import Item from "./item";

function Category({ info, category }) {
  return (
    <>
      <h3>{category}</h3>
      {info?.items
        .filter((items) => items.category_name === category)
        .map((item, i) => (
          <Item key={i} item={item} />
        ))}
    </>
  );
}

export default Category;
