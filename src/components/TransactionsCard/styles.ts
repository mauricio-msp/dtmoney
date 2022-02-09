import styled from 'styled-components'

export const CardContainer = styled.div`
  margin-top: 4rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h1 {
      font-size: 1.25rem;
      color: var(--text-title);
    }

    span {
      color: var(--text-body);
    }
  }
`

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    background: var(--shape);
    padding: 1rem;
    border-radius: 0.25rem;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 1rem;
      color: var(--text-title);
      line-height: 2rem;
    }

    > span {
      font-size: 2rem;

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: var(--text-body);
      }
    }
  }
`
