'use client'

import { RiLinkedinFill } from 'react-icons/ri'

const icons = [
  {
    path: 'https://www.linkedin.com/in/angelica-vargas-805181ab/',
    name: <RiLinkedinFill />,
  },
]

const Socials = ({ containerStyles, iconStyles, renderIcon }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) =>
        renderIcon ? (
          renderIcon(icon.name, icon.path)
        ) : (
          <a
            href={icon.path}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
            className={`${iconStyles}`}
          >
            {icon.name}
          </a>
        ),
      )}
    </div>
  )
}

export default Socials
