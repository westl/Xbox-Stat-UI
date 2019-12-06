import React from 'react';
import './App.css';
import { XboxAppPage } from './pages/XboxAppPage';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar title="Xbox Live Stats" />
      {/** Since we only have one page right now */}
      <XboxAppPage />
    </div>
  );
}

export default App;
