import React from 'react';

import Input from '../components/common/Input';
import ConnectedInput from '../components/connectedInput/ConnectedInput';
import InputGroup from '../stories/InputGroup';

const AddCard = () => {
  return (
    <div className="app">
      <h2 className="page-title">{'< 카드 추가'}</h2>
      <div className="card-box">
        <div className="empty-card">
          <div className="card-top"></div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <span className="card-text">NAME</span>
              <span className="card-text">MM / YY</span>
            </div>
          </div>
        </div>
      </div>

      <InputGroup label={{ left: '카드 번호' }} className="input-box">
        <ConnectedInput
          name="card-number"
          sign="-"
          count={4}
          input={[{ type: 'text' }, { type: 'text' }, { type: 'password' }, { type: 'password' }]}
          className="input-basic"
          maxLength={4}
          onlyNumber
        />
      </InputGroup>

      <InputGroup label={{ left: '만료일' }} className="input-box w-50">
        <ConnectedInput
          name="expiration-date"
          sign="/"
          count={2}
          input={[{ placeholder: 'MM' }, { placeholder: 'YY' }]}
          className="input-basic"
          type="text"
          maxLength={2}
          onlyNumber
        />
      </InputGroup>

      <InputGroup label={{ left: '카드 소유자 이름(선택)', right: '0/30' }} detachInput>
        <Input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength={30}
        />
      </InputGroup>

      <InputGroup label={{ left: '보안코드(CVC/CVV)' }} icon="question" detachInput>
        <Input type="text" className="input-basic w-25" maxLength={3} onlyNumber />
      </InputGroup>

      <InputGroup label={{ left: '카드 비밀번호' }} detachInput>
        <ConnectedInput
          name="card-password"
          count={4}
          input={[
            { className: 'input-basic w-15' },
            { className: 'input-basic w-15' },
            { className: 'input-underline w-15' },
            { className: 'input-underline w-15' },
          ]}
          type="password"
          maxLength={1}
          onlyNumber
        />
      </InputGroup>

      <div className="button-box">
        <span className="button-text">다음</span>
      </div>
    </div>
  );
};

export default AddCard;
