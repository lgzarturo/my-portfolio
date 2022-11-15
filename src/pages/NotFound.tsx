import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Content Not found</h1>
      <Link to="/">Go home</Link>
    </>
  );
}

export default NotFound;
