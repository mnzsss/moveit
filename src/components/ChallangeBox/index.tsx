import React from 'react'
import Image from 'next/image'

import { useChallenges } from 'hooks/challenges'

import { Container } from './styles'

const ChallangeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useChallenges()

  return (
    <Container>
      {activeChallenge ? (
        <div className="challangeActive">
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <Image
              src={`/icons/${activeChallenge.type}.svg`}
              alt={activeChallenge.type}
              width={140}
              height={112}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button className="failedButton" onClick={resetChallenge}>
              Falhei
            </button>
            <button className="succeededButton">Completei</button>
          </footer>
        </div>
      ) : (
        <div className="challangeNotActive">
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>

          <p>
            <Image
              src="/icons/level-up.svg"
              alt="Level"
              width={32}
              height={43}
            />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </div>
      )}
    </Container>
  )
}

export default ChallangeBox
