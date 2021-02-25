import React, { createContext, useContext, useEffect, useState } from 'react'
import { useChallenges } from './challenges'

interface CountdownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  handleStartCountdown(): void
  handleResetCountdown(): void
}

const CountdownContext = createContext<CountdownContextData>(
  {} as CountdownContextData
)

let countdownTimeout: NodeJS.Timeout

export const CountdownProvider: React.FC = ({ children }) => {
  const { startNewChallenge } = useChallenges()

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const handleStartCountdown = () => setIsActive(true)

  const handleResetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        handleStartCountdown,
        handleResetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext)

  if (!context) {
    throw new Error('useCountdown must be used whitin an CountdownProvider')
  }

  return context
}
