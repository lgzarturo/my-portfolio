import PropTypes from 'prop-types'
import './Link.css'

Link.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}

function Link ({ url, title }) {
  return (
    <a
      href={url}
      className='app-link'
      rel='noopener noreferrer'
      target='_blank'>{title}</a>
  )
}

export default Link
