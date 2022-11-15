import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './Project.css';

interface UsernameProps {
  username: string;
}

function Project(props: UsernameProps) {
  const { username } = props;
  const { name } = useParams();
  const { data: project, loading } = useFetch(
    `https://api.github.com/repos/${username}/${name}`
  );

  if (loading) {
    return <span>Loading ...</span>;
  }

  if (project) {
    const { name: projectName, description: projectDescription } = project;
    return (
      <div className="project-container">
        <h2 className="display-4 mt-5 mb-3">Proyecto: {projectName}</h2>
        <p className="lead">{projectDescription}</p>
      </div>
    );
  }
}

export default Project;
