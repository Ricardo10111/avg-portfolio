'use client'

import { RiLinkedinFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: 'https://www.linkedin.com/in/angelica-vargas-805181ab/',
    name: <RiLinkedinFill />,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    path: '/',
    name: <RiYoutubeFill />,
    target: '_self',
    rel: '',
  },
  {
    path: '/',
    name: <RiFacebookFill />,
    target: '_self',
    rel: '',
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link key={index} href={icon.path} target={icon.target} rel={icon.rel}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Socials
