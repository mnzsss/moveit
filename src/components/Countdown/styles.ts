import styled from 'styled-components'

export const Container = styled.div`
  .countdown {
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};

    > div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;

      span {
        flex: 1;

        &:first-child {
          border-right: 1px solid #f0f1f3;
        }

        &:last-child {
          border-left: 1px solid #f0f1f3;
        }
      }
    }

    > span {
      font-size: 6.25rem;
      margin: 0 0.5rem;
    }
  }

  button {
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
    font-weight: 600;
    transition: all 0.2s ease;

    svg {
      margin-left: 1rem;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.blue_dark};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.title};

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.text};
      cursor: not-allowed;
      border-bottom: 4px solid ${({ theme }) => theme.colors.blue};

      svg {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`
