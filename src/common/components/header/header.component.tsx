import React from 'react';

const Header = () => {
  return (
    <header className="h-12 shadow-xl px-6">
      <div className="h-full flex items-center">
        <a className="font-xl font-semibold" href="/">
          🍕 PizzaStack
        </a>
      </div>
    </header>
  );
};

export default Header;
