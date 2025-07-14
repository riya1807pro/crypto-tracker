import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import CryptoTable from "./components/CryptoTable";
import ThemeToggle from "./components/ThemeToggle";
import FilterSortBar from "./components/FilterSortBar";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  const handleRowClick = (crypto) => {
    setSelectedCrypto(crypto);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCrypto(null);
  };

  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <FilterSortBar />
        <CryptoTable onRowClick={handleRowClick} />
        {isModalOpen && (
          <CryptoModal crypto={selectedCrypto} onClose={closeModal} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;