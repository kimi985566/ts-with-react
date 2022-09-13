import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import useMousePostion from './hooks/useMousePosition';
import useUrlLoader from './hooks/useUrlLoader';

interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: {
    color: string;
    background: string;
  }
}

const themes: IThemeProps = {
  'light': {
    color: '#f23',
    background: '#fff'
  },
  'dark': {
    color: '#f99',
    background: '#fff'
  }
}

export const ThemeContext = React.createContext(themes.dark)

function App() {
  const [show, setShow] = useState(false)
  const position = useMousePostion()
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            <button onClick={() => { setShow(!show) }}>Change dog photo</button>
          </p>
          <p>
            X: {position.x},Y: {position.y}
          </p>
          {
            loading ? <p>🐶 is loading</p>
              : <img src={dogResult && dogResult.message} />
          }
          <LikeButton />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
