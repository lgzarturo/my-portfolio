import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

interface UsernameProps {
  username: string;
}

interface ProjectObject {
  name: string;
  description: string;
}

function Project(props: UsernameProps) {
  const { username } = props;
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<ProjectObject>({
    name: '',
    description: '',
  });
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/repos/${username}/${name}`
      );
      const result = await data.json();
      if (result) {
        setProject(result);
        setLoading(false);
      }
    }
    if (username && name) {
      fetchData();
    }
  }, [username, name]);

  return (
    <div className="project-container">
      <h2 className="display-4 mt-5 mb-3">Proyecto: {project.name}</h2>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <p className="lead">{project.description}</p>
      )}
    </div>
  );
}

export default Project;
