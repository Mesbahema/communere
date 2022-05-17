
import './App.css';
import  StyledButton , { FancyButton } from './components/base/Button/Button';





function App() {
  return (
    <div className="App">
      <StyledButton>Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outlined">Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>
        FancyButton
      </FancyButton>
    </div>
  );
}

export default App;
