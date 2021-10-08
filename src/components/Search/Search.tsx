import React from 'react';
import './Search.css';

type Props = {
  submit: (e: React.FormEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
};

const Search = ({ submit, onChange, value }: Props) => {
  return(
    <div id="search">
      <form>
        <label htmlFor="deck-id">Insert deck id:</label>
        <input
          type="text"
          name="deck-id"
          onChange={onChange}
          value={value}
        />
        <button onClick={submit}>Search</button>
      </form>
    </div>
  );
};

export default Search;