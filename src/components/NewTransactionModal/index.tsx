import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {/* Close Button start */}

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close-button"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      {/* Close Button end */}

      {/* Modal Content start */}

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        {/* Entrada/Saida Button start */}

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        {/* Entrada/Saida Button end */}

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>

      {/* Modal Content end */}
    </Modal>
  );
}
