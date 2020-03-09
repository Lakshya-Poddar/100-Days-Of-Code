import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider , {AuthContext} from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
    <AuthContextProvider>
      <Navbar />
      <Booklist />
      <ThemeToggle />
      </AuthContextProvider>
    </ThemeContextProvider>
    
    </div>
  );
}

export default App;
