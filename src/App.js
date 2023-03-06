import { Helmet } from 'react-helmet';
import LandingPage from './landingPage';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>CSUS Data Fest</title>
      </Helmet>
      <LandingPage/>
    </div>
  );
}

export default App;
