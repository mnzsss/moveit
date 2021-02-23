import React from 'react'

import { Container } from './styles'

const Countdown: React.FC = () => {
  return (
    <Container>
      <div className="countdown">
        <div>
          <span>2</span>
          <span>5</span>
        </div>

        <span>:</span>

        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <button type="button">Iniciar um ciclo</button>
    </Container>
  )
}

export default Countdown
