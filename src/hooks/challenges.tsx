import React, { createContext, useContext, useEffect, useState } from 'react'
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
  completeChallenge(): void
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

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const addLevel = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallenge = Math.floor(Math.random() * challenges.length)
    setActiveChallenge(challenges[randomChallenge])

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenges[randomChallenge].amount}xp`
      })
    }
  }

  const resetChallenge = () => setActiveChallenge(null)

  const completeChallenge = () => {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      addLevel()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

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
        resetChallenge,
        completeChallenge
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
