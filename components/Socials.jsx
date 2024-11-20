'use client'

import { RiLinkedinFill, RiYoutubeFill, RiFacebookFill } from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
  },
]
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} className=''>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
