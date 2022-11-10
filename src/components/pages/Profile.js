import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import Link from '../Link'
import './Profile.css'
import ProfileListProperties from './ProfileListProperties'

Profile.propTypes = {
  username: PropTypes.string,
}

function Profile ({ username }) {
  const [loading, setLoading] = useState(false)
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
      field: 'html_url',
      value: <Link url={profile.html_url} title={profile.html_url} />
    },
    {
      field: 'repos_url',
      value: <Link url={profile.repos_url} title={profile.repos_url} />
    },
    { field: 'name', value: profile.name },
    { field: 'company', value: profile.company },
    { field: 'location', value: profile.location },
    { field: 'bio', value: profile.bio }
  ]

  return (
    <div className="profile-container">
      <h2>Sobre mí</h2>
      {loading ?
        (<span>Loading ...</span>) :
        (
          <div>
            <img src={profile.avatar_url} alt={profile.name} />
            <ProfileListProperties items={items} />
          </div>
        )}
    </div>
  )
}

export default Profile
