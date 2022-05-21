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

export const SubmitButton = styled.button({
  backgroundColor: '#3552e2',
  borderRadius: '8px',
  borderStyle: 'none',
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontFamily: "Segoe UI",
  fontSize: '14px',
  fontWeight: '500',
  height: '40px',
  lineHeight: '20px',
  listStyle: 'none',
  margin: '0',
  outline: 'none',
  padding: '10px 16px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'color 100ms',
  verticalAlign: 'baseline',
  userSelect: 'none',
  touchAction: 'manipulation',
  '&:hover': {
    backgroundClor: '#617bff',
  }
});

export const CancelButton = styled(SubmitButton)({
  backgroundColor: '#6d6d6d',
  '&:hover': {
    backgroundClor: '#a2a2a2',
  }
})

