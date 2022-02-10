import styled from 'styled-components'

export const ReloadPromptContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;

  .ReloadPrompt-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 1rem;
    padding: 0.75rem;
    border: 1px solid #8885;
    border-radius: 0.25rem;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
    background-color: #fff;
  }

  .ReloadPrompt-toast-message {
    margin-bottom: 0.5rem;
  }

  .ReloadPrompt-toast-button {
    border: 1px solid #8885;
    margin-right: 0.5rem;
    border-radius: 0.25rem;
    padding: 0.175rem 0.6rem;
  }
`
