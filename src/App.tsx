import React from 'react';
import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
