import React from 'react'

import { useChallenges } from 'hooks/challenges'

import { Container } from './styles'

const CompletedChallanges: React.FC = () => {
  const { challengesCompleted } = useChallenges()
  return (
    <Container>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  )
}

export default CompletedChallanges
