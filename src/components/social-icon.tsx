import React, { FunctionComponent, useState } from 'react'

const SocialIcon: FunctionComponent<{ href: string }> = props => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={props.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      target="_blank"
      className={`p-2 -m-2 mr-2 rounded-full ${hovered ? 'bg-gray-800' : ''}`}
    >
      {props.children}
    </a>
  )
}

export default SocialIcon
