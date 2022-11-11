interface ListPropertiesState {
  items: Array<Item>
}

interface Item {
  field: any
  value: any
}

function ListProperties(props: ListPropertiesState) {
  const { items } = props
  return (
    <ul>
      {items.map((item) => (
        <li key={item.field}>
          <span>{item.field}</span>
          {item.value}
        </li>
      ))}
    </ul>
  )
}

export default ListProperties
