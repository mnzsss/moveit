import React, { createContext, useContext, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  addLevel(): void
  startNewChallenge(): void
  resetChallenge(): void
}

const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData
)

export const ChallengesProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const addLevel = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallenge = Math.floor(Math.random() * challenges.length)
    setActiveChallenge(challenges[randomChallenge])
  }

  const resetChallenge = () => setActiveChallenge(null)

  return (
    <ChallengesContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        activeChallenge,
        addLevel,
        startNewChallenge,
        experienceToNextLevel,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext)

  if (!context) {
    throw new Error('useChallenges must be used whitin an ChallengesProvider')
  }

  return context
}
