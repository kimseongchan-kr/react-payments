import { CardNumber } from 'models/card.model';
import React from 'react';
import { replaceCardNumToDot } from 'utils';
import { checkHasCardNumber } from 'utils/validation';
import {
  BigCardChip,
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  CardWrap,
  SmallCardChip,
} from './card.style';

interface CardProps {
  /**
   * 카드 크기
   */
  size?: 'small' | 'big';
  /**
   * 카드사
   */
  cardCompany?: string;
  /**
   * 유효기간 (월)
   */
  expiredMonth: string;
  /**
   * 유효기간 (년)
   */
  expiredYear: string;
  /**
   * 카드번호
   */
  cardNum: CardNumber;
  /**
   * 카드 소유자 이름
   */
  userName: string;
  /**
   * 카드 목록 페이지 여부
   */
  isListPage?: boolean;
}

/**
 * Card (Empty, Small, Big)
 */
export const Card: React.VFC<CardProps> = ({
  size = 'small',
  cardCompany,
  expiredMonth,
  expiredYear,
  cardNum,
  userName,
  isListPage,
}) => {
  const isEmptyCard = () => {
    const hasUserName = userName.length > 0;
    const hasExpiredDate = expiredMonth.length > 0 || expiredYear.length > 0;
    const hasCardNum = checkHasCardNumber(cardNum);
    return !(hasUserName || hasExpiredDate || hasCardNum);
  };
  const getUserName = () => {
    return !!userName ? userName : isListPage ? '' : 'NAME';
  };
  const getExpiredDate = () => {
    const month = !!expiredMonth ? expiredMonth : 'MM';
    const year = !!expiredYear ? expiredYear : 'YY';
    return `${month} / ${year}`;
  };

  return (
    <CardBox>
      <CardWrap size={size} isEmpty={isEmptyCard()}>
        <CardTop>{!!cardCompany && <CardText>{cardCompany}</CardText>}</CardTop>
        <CardMiddle>
          {size === 'small' ? <SmallCardChip /> : <BigCardChip />}
        </CardMiddle>
        <CardBottom>
          {!!cardNum && (
            <CardBottomNumber>
              <CardText size={size}>{`${cardNum.first} ${
                cardNum.second
              } ${replaceCardNumToDot(cardNum.third)} ${replaceCardNumToDot(
                cardNum.forth,
              )}`}</CardText>
            </CardBottomNumber>
          )}
          <CardBottomInfo>
            <CardText size={size}>{getUserName()}</CardText>
            <CardText size={size}>{getExpiredDate()}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </CardWrap>
    </CardBox>
  );
};

export default Card;