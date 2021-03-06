import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: var(--blue);
`

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding: 4rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
