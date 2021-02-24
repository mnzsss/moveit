import React, { useEffect, useState } from 'react'
import { FaPlay, FaSkull, FaGrinStars } from 'react-icons/fa'

import { Container } from './styles'

let countdownTimeout: NodeJS.Timeout

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minute1, minute2] = String(minutes).padStart(2, '0').split('')
  const [second1, second2] = String(seconds).padStart(2, '0').split('')

  const handleStartCountdown = () => setIsActive(true)

  const handleResetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  return (
    <Container>
      <div className="countdown">
        <div>
          <span>{minute1}</span>
          <span>{minute2}</span>
        </div>

        <span>:</span>

        <div>
          <span>{second1}</span>
          <span>{second2}</span>
        </div>
      </div>

      {hasFinished ? (
        <button type="button" disabled>
          Ciclo encerrado
          <FaGrinStars />
        </button>
      ) : isActive ? (
        <button type="button" className="active" onClick={handleResetCountdown}>
          Abandonar ciclo
          <FaSkull />
        </button>
      ) : (
        <button type="button" onClick={handleStartCountdown}>
          Iniciar um ciclo
          <FaPlay />
        </button>
      )}
    </Container>
  )
}

export default Countdown
