import Icon from './Icon';
import './Link.css';

interface LinkState {
  url: string;
  title: string;
  icon?: string;
}

function Link(props: LinkState) {
  const { url, title, icon } = props;
  return (
    <a
      href={url}
      className="app-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      {icon ? <Icon icon={icon} /> : title}
    </a>
  );
}

export default Link;
