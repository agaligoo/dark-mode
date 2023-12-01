import './App.css';
import Title from './Component/Title';
import Content from './Component/Content';
import { createContext, useState } from 'react';

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState("light")
  return (
      <ThemeContext.Provider value={{theme,setTheme}} >
        <div>
          <Title/>
          <Content></Content>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
