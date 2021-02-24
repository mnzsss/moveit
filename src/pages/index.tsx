import { NextPage } from 'next'
import React from 'react'

import {
  ChallangeBox,
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

        <div>
          <ChallangeBox />
        </div>
      </section>
    </Container>
  )
}

export default Home
