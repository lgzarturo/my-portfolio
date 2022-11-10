import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import './Projects.css'
import ListProperties from '../ListProperties'
import Link from '../Link'

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
      <h2 className='display-4 mt-5 mb-3'>Proyectos</h2>
      {loading ?
        (<span>Loading ...</span>) :
        (
          <div>
            <ListProperties items={projects.map((project) => ({
              field: <RouterLink to={project.name}>{project.name}</RouterLink>,
              value: <Link url={project.html_url} title={project.html_url} />
            }))} />
          </div>
        )}
    </div>
  )
}

export default Projects
