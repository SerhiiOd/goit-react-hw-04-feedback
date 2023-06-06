import styled from '@emotion/styled';

export const StatList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StatItem = styled.li`
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

  &:not(:last-child) {
    margin-right: 15px;
  }
`;
