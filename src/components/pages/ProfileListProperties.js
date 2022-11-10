import PropTypes from 'prop-types'

ProfileListProperties.propTypes = {
  items: PropTypes.array,
}

function ProfileListProperties ({ items }) {
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

export default ProfileListProperties
