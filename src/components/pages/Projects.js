import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './Projects.css'
import ListProperties from '../ListProperties'

Projects.propTypes = {
  username: PropTypes.string,
}

function Projects ({ username }) {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState({})

  useEffect(() => {
    async function fetchData () {
      const projects = await fetch(`https://api.github.com/users/${username}/repos`)
      const result = await projects.json()
      if (result) {
        setProjects(result)
        setLoading(false)
      }
    }
    fetchData()
    console.log(projects)
  }, [username])

  return (
    <div className='projects-container'>
      <h2>Proyectos</h2>
      {loading ?
        (<span>Loading ...</span>) :
        (
          <div>
            <ListProperties items={projects.map((project) => ({
              field: project.name,
              value: <RouterLink to={project.name}>{project.html_url}</RouterLink>
            }))} />
          </div>
        )}
    </div>
  )
}

export default Projects
