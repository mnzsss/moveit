import { NextPage } from 'next'
import React from 'react'

import {
  CompletedChallanges,
  Countdown,
  ExperienceBar,
  Profile
} from '@components'

import { Container } from '@styles/pages/Home'

const Home: NextPage = () => {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div className="leftContainer">
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>

        <div></div>
      </section>
    </Container>
  )
}

export default Home
