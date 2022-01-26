import { Provider as ThemeProvider } from './theme/Provider';
import { Page } from './components/Page/Page';
import { DrumMachine } from './containers/DrumMachine';

function App() {
  return (
    <ThemeProvider>
      <Page id="drum-machine">
        <DrumMachine />
      </Page>
    </ThemeProvider>
  );
}

export default App;
