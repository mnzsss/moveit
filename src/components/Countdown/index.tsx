import React from 'react'
import { FaPlay, FaSkull, FaGrinStars } from 'react-icons/fa'

import { useCountdown } from 'hooks/countdown'

import { Container } from './styles'

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    handleResetCountdown,
    handleStartCountdown
  } = useCountdown()

  const [minute1, minute2] = String(minutes).padStart(2, '0').split('')
  const [second1, second2] = String(seconds).padStart(2, '0').split('')

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
