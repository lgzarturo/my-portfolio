interface ListPropertiesState {
  items: Array<Item>;
}

interface Item {
  id: string | number;
  field: string | JSX.Element;
  value: string | JSX.Element;
}

function ListProperties(props: ListPropertiesState) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.field}</span>
          {item.value}
        </li>
      ))}
    </ul>
  );
}

export default ListProperties;
