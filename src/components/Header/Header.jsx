import React from 'react';
import SearchBar from '../SearchBar/Search';
import CartButton from '../CartButton/CartButton';

export default function Header() {
  return (
    <>
      <header className="bg-cyan-400 fixed w-full">
        <div className="max-w-5xl m-auto flex justify-between items-center p-[14px]">
          <SearchBar />
          <CartButton />
        </div>
      </header>
    </>
  );

}
