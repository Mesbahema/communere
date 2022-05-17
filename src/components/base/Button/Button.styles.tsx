import styled from 'styled-components'

export const StyledButton = styled.button`
  /* background-color: #2fe5e5; */
  background-color: ${(props: {
      variant?: string
  }) => props.variant == 'outlined' ? '#2fe5e5' : '#14ab34'};
  border-radius: 10px;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6ff00 0%, #ff0000 100%);
    border: none;
`
