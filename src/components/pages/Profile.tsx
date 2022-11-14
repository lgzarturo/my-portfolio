import { useState, useEffect } from 'react';
import Link from '../Link';
import './Profile.css';
import ListProperties from '../ListProperties';

interface UsernameProps {
  username: string;
}

interface ProfileObject {
  name: string;
  company: string;
  location: string;
  bio: string;
  html_url: string;
  repos_url: string;
  avatar_url: string;
}

function Profile(props: UsernameProps) {
  const { username } = props;
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileObject>({
    name: '',
    company: '',
    location: '',
    bio: '',
    html_url: '',
    repos_url: '',
    avatar_url: '',
  });

  useEffect(() => {
    async function fetchData() {
      const fetchProfile = await fetch(
        `https://api.github.com/users/${username}`
      );
      const result = await fetchProfile.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  const items = [
    {
      id: 1,
      field: 'perfil',
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      id: 2,
      field: 'repositorios',
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    { id: 3, field: 'nombre', value: profile.name },
    { id: 4, field: 'compañía', value: profile.company },
    { id: 5, field: 'ubicación', value: profile.location },
    { id: 6, field: 'bio', value: profile.bio },
  ];

  return (
    <div className="profile-container">
      <h2 className="display-4 mt-5 mb-3">Sobre mí</h2>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <div className="card my-4">
          <div className="row g-0">
            <div className="col-md-2">
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="img-fluid rounded-start"
              />
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
  );
}

export default Profile;
