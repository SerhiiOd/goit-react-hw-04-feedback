import styled from '@emotion/styled';

export const BtnBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 15px;
`;

export const BtnClick = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  padding: 5px;

  border-radius: 5px;

  border: 1px solid orange;

  background: rgb(255, 0, 170);
  background-image: radial-gradient(
    circle,
    rgba(255, 0, 170, 0.7987570028011204) 3%,
    rgba(254, 79, 36, 1) 10%,
    rgba(254, 255, 0, 1) 47%,
    rgba(220, 255, 0, 1) 86%,
    rgba(104, 255, 0, 1) 94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 30px 5px rgba(33, 179, 9, 0.75);
    -webkit-box-shadow: 0px 0px 30px 5px rgba(33, 179, 9, 0.75);
    -moz-box-shadow: 0px 0px 30px 5px rgba(33, 179, 9, 0.75);
  }
`;
