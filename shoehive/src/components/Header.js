import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-red-800 p-4">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Shoehive</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
