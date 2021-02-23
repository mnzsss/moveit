import React from 'react'
import Image from 'next/image'

import { Container } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/51327920?s=460&u=3bde17a5a3fa079b69f30b09fb483f6dbf577be1&v=4"
        alt="Gabriel Menezes"
      />

      <div>
        <strong>Gabriel Menezes</strong>
        <p>
          <Image src="/icons/level.svg" alt="Level" width={14} height={16} />
          Level 1
        </p>
      </div>
    </Container>
  )
}

export default Profile
