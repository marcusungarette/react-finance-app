import { useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from './TransactionsContext';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransaction] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransaction(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransaction(false);
  }
  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
