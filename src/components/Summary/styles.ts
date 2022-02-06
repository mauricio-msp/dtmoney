import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;

  @media (max-width: 930px) {
    overflow-x: auto;
    margin-top: -9rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const SummaryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -9rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

    > p {
      display: none;
      color: var(--text-body);
    }
  }

  @media (max-width: 930px) {
    width: 1280px;
    margin-top: 0;

    div > p {
      display: block;
    }
  }
`
