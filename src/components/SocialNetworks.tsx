import Link from './Link'

function SocialNetworks() {
  const items = [
    { title: 'LinkedIn', url: 'https://linkedin.com/in/lgzarturo', icon: 'linkedin' },
    { title: 'GitHub', url: 'https://github.com/lgzarturo', icon: 'github' },
    { title: 'Twitter', url: 'https://twitter.com/lgzarturo', icon: 'twitter' },
    { title: 'Instagram', url: 'https://www.instagram.com/lgzarturo/', icon: 'instagram' }
  ]

  return (
    <nav>
      {items.map((link) => (
        <Link key={link.icon} url={link.url} title={link.title} icon={link.icon} />
      ))}
    </nav>
  )
}

export default SocialNetworks
