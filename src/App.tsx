import React from 'react';
import CardList from './components/card-list/CardList';
import Filter from './components/filter/Filter';

function App() {

  return (
    <div className="App container">
      <Filter />
      <CardList />
    </div>
  );
}

export default App;
