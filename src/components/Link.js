import PropTypes from 'prop-types'
import Icon from './Icon'
import './Link.css'

Link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
}

function Link ({ url, title, icon }) {
  return (
    <a
      href={url}
      className='app-link'
      rel='noopener noreferrer'
      target='_blank' alt={title}>{icon ? (<Icon icon={icon} />) : title}</a>
  )
}

export default Link
