import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: ${props => props.theme.background};
    --red: #E52e54;
    --blue: ${props => props.theme.blue};
    --green: #33CC95;

    --blue-light: ${props => props.theme.blueLight};

    --text-title: ${props => props.theme.title};
    --text-body: #969cb3;

    --shape: ${props => props.theme.shape};
    --modal: ${props => props.theme.modal};
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    position: relative;
    -webkit-font-smoothing: antialiased;
    transition: all ease .5s;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, .5);
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--modal);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .react-container-icon {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 20px;
    color: #F6B803;
  }

  @media (max-width: 480px) {
    .react-modal-overlay {
      align-items: flex-end;
    }
  }
`
