import { NextPage } from 'next'
import React from 'react'

import { CountdownProvider } from 'hooks/countdown'

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

      <CountdownProvider>
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
      </CountdownProvider>
    </Container>
  )
}

export default Home
