import styled from 'styled-components';
import FormikContainer from './components/FormikContainer';

const MainLayout = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

function App() {
  return (
    <MainLayout>
      <FormikContainer />
    </MainLayout>
  );
}

export default App;
