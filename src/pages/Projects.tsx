import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Projects.css';
import ListProperties from '../components/ListProperties';
import Link from '../components/Link';

interface UsernameProps {
  username: string;
}

interface ProjectObject {
  name: string;
  html_url: string;
}

function Projects(props: UsernameProps) {
  const { username } = props;
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchProjects = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const result = await fetchProjects.json();
      if (result) {
        setProjects(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  return (
    <div className="projects-container">
      <h2 className="display-4 mt-5 mb-3">Proyectos</h2>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <div>
          <ListProperties
            items={projects.map((project: ProjectObject) => ({
              id: project.name,
              field: <RouterLink to={project.name}>{project.name}</RouterLink>,
              value: <Link url={project.html_url} title={project.html_url} />,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
