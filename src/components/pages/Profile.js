import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Link from '../Link'
import './Profile.css'
import ListProperties from '../ListProperties'

Profile.propTypes = {
  username: PropTypes.string,
}

function Profile ({ username }) {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    async function fetchData () {
      const profile = await fetch(`https://api.github.com/users/${username}`)
      const result = await profile.json()
      if (result) {
        setProfile(result)
        setLoading(false)
      }
    }
    fetchData()
    console.log(profile)
  }, [username])

  const items = [
    {
      field: 'perfil',
      value: <Link url={profile.html_url} title={profile.html_url} />
    },
    {
      field: 'repositorios',
      value: <Link url={profile.repos_url} title={profile.repos_url} />
    },
    { field: 'nombre', value: profile.name },
    { field: 'compañía', value: profile.company },
    { field: 'ubicación', value: profile.location },
    { field: 'bio', value: profile.bio }
  ]

  return (
    <div className="profile-container">
      <h2 className='display-4 mt-5 mb-3'>Sobre mí</h2>
      {loading ?
        (<span>Loading ...</span>) :
        (
          <div className='card my-4'>
            <div className="row g-0">
              <div className="col-md-2">
                <img src={profile.avatar_url} alt={profile.name} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <ListProperties items={items} />
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Profile
