import React, { useState } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Search from './components/Search/Search';
import Deck from './components/Deck/Deck';
import Error from './components/Error/Error';
import { getDeck } from './services';

function App() {

  // Hero id's represent the current, fetched deck.
  const [currentHeroIds, setCurrentHeroIds] = useState<string[]>([]);
  
  // Show or not 'Deck not found' error.
  const [error, setError] = useState(false);
  // FalseId (ie. no deck with given id) is passed to Error comp to render it for the unlucky user.
  const [falseId, setFalseId] = useState('');
  
  // Search is controlled/handeled from this component
  const [searchInput, setSearchInput] = useState<string>('');
  
  // Updates currentHeroIds state (.ie looks for a deck by id)
  const submitSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      const newDeck = await getDeck(searchInput);
      if(newDeck.length === 0){
        // There was something wrong with the call. Store searchInput value to falseId.
        setFalseId(searchInput);
        // And show error notification.
        setError(true);
        setCurrentHeroIds([]);
      } else {
        // Deck holds some cards. It's ok.
        setCurrentHeroIds(newDeck);

        // Clear falseId and error if needed.
        falseId && setFalseId('');
        error && setError(false);
      }
    } catch(e){
      console.log(e);
    }
    setSearchInput('');
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value);

  return (
    <div className="App">
      <Title/>
      <Search
        submit={submitSearch}
        onChange={handleSearchInput}
        value={searchInput}
      />
      {error && <Error falseId={falseId}/>}
      {currentHeroIds && <Deck ids={currentHeroIds}/>}
    </div>
  );
}

export default App;
