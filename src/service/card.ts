import { parse } from 'date-fns';
import { Card, CardForm } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

export const convertToCard = (cardForm: CardForm): Card => {
  return {
    CVC: cardForm.CVC,
    cardNumber: cardForm.cardNumber.join('-'),
    expireDate: parse(cardForm.expireDate.join(''), 'MMyy', new Date()),
    password: cardForm.password.join(''),
    userName: cardForm.userName,
    nickname: null,
  };
};

export const storeCard = (card: Card) => {
  const cardsStored = getLocalStorage('cards') ?? [];
  setLocalStorage('cards', [...cardsStored, card]);
};
