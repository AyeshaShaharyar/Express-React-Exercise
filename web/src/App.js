import React from 'react';
import List from './components/List';

import './App.css';
import Button from './components/Button';

export function App() {
  return (
    <div className="App">
      <h1 className="heading">List of repositories </h1>
      <Button />
      <List />
    </div>
  );
}
