import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <form action="" className="flex bg-white w-full max-w-[500px] justify-between">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="p-2 grow outline-0 text-[16px]"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="flex items-center justify-center text-gray-600 px-4 border-x-orange-950">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
