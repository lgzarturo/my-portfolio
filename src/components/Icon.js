import PropTypes from 'prop-types'

Icon.propTypes = {
  icon: PropTypes.string,
}

function Icon ({ icon }) {
  return (
    <><i className={`fa-brands fa-${icon}`}></i></>
  )
}

export default Icon
