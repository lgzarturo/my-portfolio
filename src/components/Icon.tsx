interface IconState {
  icon: string
}

function Icon(props: IconState) {
  const { icon } = props
  return (
    <>
      <i className={`fa-brands fa-${icon}`}></i>
    </>
  )
}

export default Icon
