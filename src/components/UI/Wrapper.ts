import styled, { css } from 'styled-components';

export const Root = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  min-height: 700px;
  position: relative;
  border-radius: 15px;
  border: 1px solid #e5e5e5;
`;

export const App = styled.div<{ flexColumnCenter?: boolean }>`
  height: 100%;
  padding: 16px 24px;

  ${({ flexColumnCenter }) =>
    flexColumnCenter &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;